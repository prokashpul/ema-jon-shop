import React, { useState } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import CustomLink from "../CustomLink/CustomLink";
import CartNum from "../CartNum/CartNum";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <nav className="header-nav">
        <div className="logo">
          <img src={logo} alt="EmaJonShop" height="40" width="140" />
        </div>
        <ul
          className={open ? "open nav-items" : "nav-items"}
          onClick={() => setOpen(!open)}
        >
          <li className="nav-item">
            <CustomLink to="/shop">Shop</CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink to="/order">
              Order
              <sup>
                <CartNum />
              </sup>
            </CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink to="/inventory">Inventory</CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink to="/about">About</CustomLink>
          </li>
        </ul>
        <div className="open-nav" onClick={() => setOpen(!open)}>
          {!open ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faXmark} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
