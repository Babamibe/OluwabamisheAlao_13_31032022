import './App.css';
import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LogIn from './pages/LogIn/LogIn';
import Profile from './pages/Profile/Profile';
import { useSelector} from 'react-redux';


function App() {
  
  const loggedIn = useSelector(state => state.user.loggedIn)
   let element = useRoutes([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/login",
      element: <LogIn/>
    },
    {
      path: "/profile",
      element: loggedIn? <Profile/>: <Navigate to={"/login"} /> ,      
    },
    {
      path: "*",
      element: <h1>Error 404</h1>
    }
  ])
  
  return (
    
    <div className="App">
      <Header/>
      {element}
      <Footer/>
    </div>
  );
}

export default App;



