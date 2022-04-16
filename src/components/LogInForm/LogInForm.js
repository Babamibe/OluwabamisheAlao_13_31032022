import React from 'react';
import Button from '../Button/Button';
import './LogInForm.css'
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../redux/features/userSlice';
import { logInUser } from '../../services/API/API';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../redux/store';

  


function LogInForm(props) {
  
  
  let dispatch = useDispatch()
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
    rememberMe: JSON.parse(localStorage.getItem("remember"))
  })

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  React.useEffect(()=> {
    localStorage.setItem("remember", formData.rememberMe)
  }, [formData.rememberMe])

    let navigate = useNavigate()
    let username = formData.username
    let password = formData.password
    let rememberMe = formData.rememberMe
  
    let user = useSelector(state => state.user.token)
    console.log("current token", user)
    console.log("store state", store.getState())
    const handleSubmit = async(e) => {
      e.preventDefault()      
      await dispatch(logInUser(username, password))
      .then(data => {
        console.log("normalement token",data)
        dispatch(logIn(data))
        //setToken(data)
        if(data){
          navigate("/profile")
        }
      })
    }
    
    

    return (
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input 
            type="text" 
            id="username" 
            name='username'
            value={formData.username}
            autoComplete={rememberMe? username : ""}
            onChange={handleChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            id="password" 
            name='password'
            value={formData.password}
            onChange={handleChange}
            autoComplete={rememberMe? password : ""}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" 
            id="remember-me" 
            name='rememberMe'
            checked={formData.rememberMe}
            onChange={handleChange}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Button
          class={"sign-in-button"}
          content={"Sign In"}
          />
        </form>
    );
}

export default LogInForm;