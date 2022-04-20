import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/argentBankLogo.png'
import "./Header.css"
import { logOut } from "../../redux/features/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Header(props) {
  let loggedIn = useSelector((state) => state.user.loggedIn)
  let user = useSelector((state) => state.user.currentUser)
  let dispatch = useDispatch()
    return (
       
            <nav className="main-nav">
                <NavLink className="main-nav-logo" to="/">
                    <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                
                {
                loggedIn ? 
                (
                    <div>
                    <NavLink className="main-nav-item" to="/profile">
                      <i className="fa fa-user-circle"></i>
                      {user.firstName}
                    </NavLink>
                    <NavLink className="main-nav-item" to="/login" onClick={dispatch(logOut)}>
                      <i className="fa fa-sign-out"></i>
                      Sign Out
                    </NavLink>
                  </div>
                )
                : (
                    <div>
                      <NavLink className="main-nav-item" to="/login">
                      <i className="fa fa-user-circle"></i>
                      Sign In
                      </NavLink>
                    </div>
                )}
            </nav>
        
    );
}

export default Header;

