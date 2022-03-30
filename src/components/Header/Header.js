import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { closeBar, openBar } from "../../utilities/Navbartogole";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="logo">
          <img src={logo} alt="EmaJonShop" height="40" width="140" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <CustomLink to="/shop">Shop</CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink to="/order">Order</CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink to="/inventory">Inventory</CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink to="/about">About</CustomLink>
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
