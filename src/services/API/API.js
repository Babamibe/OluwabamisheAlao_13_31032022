
const BASE_URL = "http://localhost:3001/api/v1"

/**
 * add token to storage
 * @param {*} token 
 */
export const setToken = (token) => {
    localStorage.setItem("token", token)
}

/**
 * get token from storage
 */
export const getToken = () => {
    localStorage.getItem("token")
}

// const deleteToken = () => {
//     localStorage.removeItem("token")
// }

/**
 * API post call to get login token
 * @param {String} login 
 * @param {String} password 
 * @param {Boolean} rememberMe 
 * @returns {Object}
 */
export const logInUser = (login, password, rememberMe) => {
    return async() => {
        try {
            const res = await fetch(`${BASE_URL}/user/login`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    },
                body: JSON.stringify({
                    email: login,
                    password: password
                })
            })
            const data = await res.json()
            const token = data.body.token
            if(rememberMe) {
                setToken(token)
                localStorage.setItem("username", login)
                localStorage.setItem("pass", password)
            }
            return token
        } catch(err) {
            console.error("err", err)
        }
    }
}   

/**
 * API post call to get user information
 * @param {String} token 
 * @returns {Object}
 */
export const getUserInfo = (token) => {  
    return async () => {
        try{
            const res = await fetch(`${BASE_URL}/user/profile`, {
                method: "post",
                headers: {
                    Authorization: `Bearer ` + token
                },
                body: JSON.stringify()
            })
            const data = await res.json()
            const body = data.body
            const email = body.email
            const firstName = body.firstName
            const lastName = body.lastName
            return {email, firstName,lastName}
        } catch (err) {
            console.log('err',err)
        }
    } 
}

/**
 * API put call to update user information
 * @param {String} firstName 
 * @param {String} lastName 
 * @param {String} token 
 */
export const updateUser = (firstName, lastName, token) => {
    fetch(`${BASE_URL}/user/profile`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer `+ token
        },
        body: JSON.stringify({firstName:firstName, lastName:lastName})
    }).then( async (res) => {
        if(res.ok) {
            let jsonRes =  await res.json()
            console.log("updated!", jsonRes)
            return res
        }
    }).catch(err => console.log(err))
} 


