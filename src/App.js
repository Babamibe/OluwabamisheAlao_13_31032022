import './App.css';
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LogIn from './pages/LogIn/LogIn';
import Profile from './pages/Profile/Profile';

function App() {
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
      element: <Profile/>,      
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
