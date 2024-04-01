import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
  return (
    <>
    
    <div className="header">
    {/* <div><Link to="/">HOME</Link>
    <Link to="/signup">Signup</Link>
    <Link to="/login">Login</Link>
    </div> */}
    <nav className='main-nav'>
    <div class="right">
           <ul>
            <li>
              <a href="#">buy</a>
            </li>
            <li>
              <a href="#">rent</a>
            </li>
            <li>
              <a href="#">mortgage</a>
            </li>
           </ul>
          </div>


          <div className='logo'>
        <h2>
          <span>PG</span>
          <span>F</span>inder
        </h2>
      </div>
      

    <div className="menu-link">
        <ul className='menu-link-desktop'>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">signup</a>
          </li>
          <li>
            <a href="#">login</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">contact us</a>
          </li>
        </ul>  
    </div>
    </nav>
    <section className="hero">
      <h1>
        HOMES THAT MATCH
      </h1>
    </section>
    </div>
    </>
  )
  
}

export default Header