import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="logo">
          <img src={logo} alt="EmaJonShop" height="40" width="140" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <a href="/shop">Shop</a>
          </li>
          <li className="nav-item">
            <a href="/order">Order</a>
          </li>
          <li className="nav-item">
            <a href="/order-review">Order Review</a>
          </li>
          <li className="nav-item">
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
