
const BASE_URL = "http://localhost:3001/api/v1"

export const setToken = (token) => {
    localStorage.setItem("token", token)
}

export const getToken = () => {
    localStorage.getItem("token")
}

// const deleteToken = () => {
//     localStorage.removeItem("token")
// }

export const logInUser = (login, password) => {
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
            console.log("login data", data)
            return token
        } catch(err) {
            console.error("err", err)
        }
    }
    // fetch(`${BASE_URL}/user/login`, {
    //     method: "POST",
    //     headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //         },
    //     body: JSON.stringify({
    //         email: login,
    //         password: password
    //     })
    // }).then( async (res) => {
    //     if(res.ok) {
    //         let jsonRes =  await res.json()
    //         console.log("it works!", jsonRes)
    //         const token = jsonRes.body.token
    //         setToken(token)
    //         return {token}
    //     }
    // })
    // .catch(err => console.log(err))
}   

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
            console.log("getuserdata",data)
            return {email, firstName,lastName}
        } catch (err) {
            console.log('err',err)
        }
    } 
}


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


