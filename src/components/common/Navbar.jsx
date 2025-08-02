import React from 'react';
import './Navbar.css';
import logo from '../../assets/image.png'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-top-left">
          <span>+9761-8523-398</span>
          <span>|</span>
          <span>KLLG St, No.99, Pku City, ID 28289</span>
        </div>
        <div className="navbar-social">
          <a href="#" aria-label="Facebook">📘</a>
          <a href="#" aria-label="Twitter">🐦</a>
          <a href="#" aria-label="Instagram">📸</a>
          <a href="#" aria-label="WhatsApp">💬</a>
        </div>
      </div>
      <div className="navbar-main">
        <div className="navbar-logo"> <img src={logo} /></div>
        <div className="navbar-links">
          <a href="#" className="active">Homepage</a>
          <a href="#">About Us</a>
          <a href="#">Facilities ▼</a>
          <a href="#">Lawyers Verification</a>
          <a href="#">Events ▼</a>
          <a href="#">Download ▼</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;