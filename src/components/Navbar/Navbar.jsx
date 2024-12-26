import { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const handleToggleMenu = () => {
    setMenuActive(!menuActive);
    if (!menuActive) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  const handleToggleSearch = () => {
    setSearchActive(!searchActive);
  };

  return (
    <div>
      {/* Sale Banner */}
      <div className="sale">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
        <NavLink to="/"><span>Shop Now</span></NavLink>
      </div>

      {/* Navbar */}
      <div className={`custom-navbar ${menuActive ? "menu-open" : ""}`}>
        <div className="navbar-logo">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="logo" />
          </NavLink>
        </div>

        {/* Hamburger Icon */}
        <div className="burger">
          <button className="navbar-toggle" onClick={handleToggleMenu}>
            {menuActive ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`navbar-links ${menuActive ? "active" : ""}`}>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink></li>
            <li><NavLink to="/signup" className={({ isActive }) => isActive ? "active-link" : ""}>Sign Up</NavLink></li>

          </ul>
        </div>

        {/* Navbar Actions */}
        <div className="navbar-actions">
          {/* Search Bar */}
          <div className={`search-bar ${searchActive ? "active" : ""}`}>
            <input type="text" placeholder="What are you looking for?" />
            <button className="search-button" onClick={handleToggleSearch}>
              <FaSearch />
            </button>
          </div>
          {/* Wishlist */}
          <div className="wishlist">
            <NavLink to="/wishlist"><FaHeart /></NavLink>
          </div>
          {/* Cart */}
          <div className="cart">
            <NavLink to="/cart"><FaShoppingCart /></NavLink>
          </div>
          {/* Profile */}
          <div className="profile">
            <NavLink to="/profile"><FaUser /></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
