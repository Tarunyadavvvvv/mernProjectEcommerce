import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../../../images/logo.png';
import './Header.css'; // Make sure to create this file for your custom CSS

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="navbar-icons">
        <Link to="/search">
          <FaSearch />
        </Link>
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
        <Link to="/login">
          <FaUser />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
