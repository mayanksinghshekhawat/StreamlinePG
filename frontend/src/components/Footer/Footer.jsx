import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <section className="footer-row">
          <div className="footer-col">
            {/* Left side content */}
            <ul>
              <li>
                <a href="#">Estate</a>
              </li>
              <li>
                <a href="#">New Listings</a>
              </li>
              <li>
                <a href="#">Useful Links</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            {/* Center content */}
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQ and more</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            {/* Right side content */}
            <ul>
              <li>
                <a href="#">Find Us At</a>
              </li>
              <li>
                <a href="#">Wholesale</a>
              </li>
              <li>
                <a href="#">Ambassador Program</a>
              </li>
            </ul>
            <form>
              
              <label htmlFor="email">Newsletter</label><br />
              <input type="email" id="email" placeholder="Enter email" />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </section>
        <section className="footer-row">
          <div className="footer-col">
            <p className="copyright">
              Copyright 2023 Estate All Rights Reserved
            </p>
          </div>
          <div className="footer-col">
            {/* Links */}
            <ul>
              <li>
                <a href="#">Buy</a>
              </li>
              <li>
                <a href="#">Rent</a>
              </li>
              <li>
                <a href="#">Mortgage</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            {/* Links */}
            <ul>
              <li>
                <a href="#">Saved Homes</a>
              </li>
              <li>
                <a href="#">Saved Searches</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
