import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { closeBar, openBar } from "../../utilities/Navbartogole";

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
        <div className="open-nav" onClick={openBar}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="close-nav" onClick={closeBar}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
