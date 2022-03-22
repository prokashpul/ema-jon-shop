import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // mobile nav bar open and close
  const openBar = () => {
    document.querySelector(".open-nav").style.display = "none";
    document.querySelector(".nav-items").style.left = "0";
    document.querySelector(".close-nav").style.display = "block";
  };
  const closeBar = () => {
    document.querySelector(".close-nav").style.display = "none";
    document.querySelector(".open-nav").style.display = "block";
    document.querySelector(".nav-items").style.left = "-100%";
  };
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
          <li className="nav-item" onClick={openBar}>
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
