import React from 'react';
   import './Navbar.css';

   function Navbar() {
     return (
       <nav className="navbar">
         <div className="navbar-top">
           <div className="navbar-top-left">
             <span>+9761-852-386</span>
             <span>|</span>
             <span>KLG St, No.99, Pku City, 10 2829</span>
           </div>
           <div className="navbar-social">
             <a href="#">📘</a>
             <a href="#">🐦</a>
             <a href="#">📸</a>
             <a href="#">💬</a>
           </div>
         </div>
         <div className="navbar-links">
           <div className="navbar-logo">Prudent <span style={{ fontSize: '0.75rem' }}>Notary Public</span></div>
           <a href="#">Homepage</a>
           <a href="#">About Us</a>
           <a href="#">Facilities</a>
           <a href="#">Lawyers Verification</a>
           <a href="#">Events</a>
           <a href="#">Downloads</a>
           <a href="#">Contact Us</a>
         </div>
       </nav>
     );
   }

   export default Navbar;