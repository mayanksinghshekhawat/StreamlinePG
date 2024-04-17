import React from 'react'
import './NewNavbar.css'
import { Link } from 'react-router-dom'
import PGlogo from './PGlogo.png'
import {useNavigate} from 'react-router-dom';
function NewNavbar() {
    const navigate = useNavigate();

  const handleLoginClick = () => {
    // Redirect to another page
    navigate('/login');
  };

      const handleSignupClick = () => {
        // Redirect to another page
        navigate('/login');
      };
  return (
    <nav className='main-nav'>
        <div className="mainNav">
    <div className="left">
            <Link to="/"><img className="logo" src={PGlogo} alt="logo"/></Link>
            {/* <Link to="/"><img className="logo" src={finder} alt="logo"/></Link> */}
          </div>
    <div className="right">
    <Link to="/">Home</Link>
    <Link to="/map">Discover</Link>
    <Link to="/roomMate">Roommates</Link>
    <button onClick={() => handleSignupClick()}>Signup</button>
    <button onClick={() => handleLoginClick()}>Login</button>
    
          </div>
          </div>
   
    </nav>
  )
}

export default NewNavbar