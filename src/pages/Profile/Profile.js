import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AccountItem from '../../components/AccountItem/AccountItem';
import Button from '../../components/Button/Button';
import { accountItemContent } from '../../data/accountItemContent';
import { setUser, updateInfo } from '../../redux/features/userSlice';
import { getUserInfo, updateUser } from '../../services/API/API';
import './Profile.css'

function Profile(props) {
    
    const[inputData, setInputData] = React.useState({
        firstName: "",
        lastName: ""
    })
    const [visible, setVisible] = React.useState(false)

    
    
    let dispatch = useDispatch()
    let token = useSelector(state => state.user.token)
    React.useEffect(() => {
        
        const getUserProfile = async () =>{
            
            console.log("profile token", token)
            await dispatch(getUserInfo(token))
            .then(data => {
            console.log("data", data)
            dispatch(setUser(data))
        })
        .catch((e)=> console.log("err", e))
        }
        
        getUserProfile()
    }, [dispatch, token])
    
    function handleChange(event) {
        const {name, value} = event.target
        setInputData( prevData => ({
            ...prevData,
            [name] : value
        }))
    }

    function handleSave(e) {
        
        e.preventDefault()
        console.log("saved!")
        updateUser(inputData.firstName, inputData.lastName, token)
        dispatch(getUserInfo(token))
        .then(data => dispatch(updateInfo(data)))
        .catch((err) => console.error(err))
        setVisible(false)
    }

    let user = useSelector((state) => state.user.currentUser)
    
    console.log('user', user)
    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{user? user.firstName : "Raymond"} {user? user.lastName : "Nobody"}!</h1>
                {visible ?
                    <>
                        <div>
                            <input 
                            type="text" 
                            id="firstName" 
                            name='firstName'
                            value={inputData.firstName}
                            autoComplete={inputData.firstName}
                            onChange={handleChange}
                            />
                            <input 
                            type="text" 
                            id="lastName" 
                            name='lastName'
                            value={inputData.lastName}
                            autoComplete={inputData.lastName}
                            onChange={handleChange}
                            />
                        </div>
                        <div>
                            <button onClick={handleSave}>Save</button>
                            <button onClick={() => setVisible(false)}>Cancel</button>
                        </div>
                    </>
                :
                    <Button
                    class={"edit-button"}
                    content={"Edit Name"}
                    onClick={() => setVisible(true)}
                    />                    
                }
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accountItemContent.map(account => {
                return (
                    <AccountItem
                    key={account.id}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                    />
                )
            })}        
        </main>
    );
}

export default Profile;