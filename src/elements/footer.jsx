import React from 'react';
import './footer_style.css';
import Peack2Beach_full from "../images/Peack2Beach_full.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Tripadvisor</h3>
          <img src={Peack2Beach_full} style={{height:'100px'}}></img>
          <ul>
            <li><a href="#">About Us</a></li>

          </ul>
        </div>
        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li><a href="#">Write a review</a></li>
            <li><a href="#">Add a Place</a></li>
            <li><a href="#">Join</a></li>
            <li><a href="#">Travellers' Choice</a></li>
            <li><a href="#">GreenLeaders</a></li>
            <li><a href="#">Help Centre</a></li>
            <li><a href="#">Travel Articles</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Do Business With Us</h3>
          <ul>
            <li><a href="#">Owners & DMO/CVB</a></li>
            <li><a href="#">Business Advantage</a></li>
            <li><a href="#">Sponsored Placements</a></li>
            <li><a href="#">Access our Content API</a></li>
            <li><a href="#">Get The App</a></li>
            <li><a href="#">iPhone App</a></li>
            <li><a href="#">Android App</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Tripadvisor Sites</h3>
          <p>Book tours and attraction tickets on Viator</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">
          © 2024 Tripadvisor LLC All rights reserved.
        </div>
        <div className="links">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy and Cookies Statement</a>
          <a href="#">Cookie consent</a>
          <a href="#">Site Map</a>
          <a href="#">How the site works</a>
          <a href="#">Contact us</a>
        </div>
        <div className="language-selector">
          <div className="currency-selector">
            <span className="currency-symbol">₹</span>
            <span className="currency-code">INR</span>
            <span className="dropdown-arrow">▼</span>
          </div>
          <div className="country-selector">
            <span className="country">India</span>
            <span className="dropdown-arrow">▼</span>
          </div>
        </div>
        <div className="social-media">
          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fas fa-times"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-pinterest-p"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        </div>
        <div className="disclaimer">
          This is the version of our website addressed to speakers of English in India. If you are a resident of another country or region, please select
          the appropriate version of Tripadvisor for your country or region in the drop-down menu. <a href="#">more</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer