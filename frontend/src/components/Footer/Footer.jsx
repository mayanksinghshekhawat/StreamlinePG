import React from 'react';
import './Footer.css'; // Import the CSS file
import PGlogo from '../Navbar/PGlogo.png'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="upper-footer">
        <div className="logo">
          {/* Your logo */}
          <img src={PGlogo} alt="Logo" style={{width : "50px"}} />
        </div>
        <div className="subscribe">
        <h2>Subscribe to our Newsletter</h2>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
        <div className="links">
          {/* Your links */}
          <a href="#">Home</a>
          <a href="#">Discover</a>
          <a href="#">Find Roommate</a>
        </div>
      </div>
      <div className="lower-footer">
        <div className="socialls">
        <div className="social-icons">
          {/* Your social icons */}
          <TiSocialFacebook/>
        </div>
        <div className="social-icons">
          {/* Your social icons */}
          <TiSocialTwitter/>
        </div>
        <div className="social-icons">
          {/* Your social icons */}
          <TiSocialYoutube/>
        </div>
        <div className="social-icons">
          {/* Your social icons */}
          <AiFillInstagram />
        </div>
        
        
        </div>

        
        
        <div className="copyright">
          {/* Your copyright text */}
          &copy; 2024 PGfinder
        </div>
      </div>
    </footer>
  );
};

export default Footer;
