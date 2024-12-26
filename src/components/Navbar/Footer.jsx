import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom";
import './Footer.css';
import google from '../assets/google.png'
import app from '../assets/app.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Subscription Section */}
        <div className="footer-section">
          <img className='foot-logo' src={logo} alt='logo'></img>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">&#x27A4;</button>
          </form>
        </div>

        {/* Support Section */}
        <div className="footer-section">
          <h4>Support</h4>
          <p>C-Lal Chowk, Govindpuri, Delhi,</p>
          <p > <a href="mailto:sagarkshn8@gmail.com.com">sagarkshn8@gmail.com</a></p>
          <p><a href="tel:+1234567890">+91 88091 97377</a></p>
        </div>

        {/* Account Section */}
        <div className="footer-section">
          <h4>Account</h4>
          <ul>
            <li><NavLink to="/profile">My Account</NavLink></li>
            <li><NavLink to="/signup">Login / Register</NavLink></li>
            <li><NavLink to="/cart">Cart</NavLink></li>
            <li><NavLink to="/wishlist">Wishlist</NavLink></li>
            <li><NavLink to="/">Shop</NavLink></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Use</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        {/* App Download Section */}
        <div className="footer-section">
          <h4>Download App</h4>
          <p>Save upto ₹150 with App New User Only</p>
          <div className="app-buttons">
            <img className='google' src={google} alt="Google Play" />
            <img className='apple' src={app} alt="App Store" />
          </div>
          <div className="social-icons">
            <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className='copy'>&copy; Copyright Shopers 2025. All rights reserved</p>
        <p>Managed by TehelkaDevelopers</p>
      </div>
    </footer>
  );
};

export default Footer;