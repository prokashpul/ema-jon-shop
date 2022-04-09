import React, { useState } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import CustomLink from "../CustomLink/CustomLink";
import CartNum from "../CartNum/CartNum";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="logo">
          <img src={logo} alt="EmaJonShop" height="40" width="140" />
        </div>
        <ul
          className={open ? "open nav-items" : "nav-items"}
          onClick={() => setOpen(false)}
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
          {user ? (
            <li className="nav-item">
              <button onClick={logout} className="btn">
                Sin Out
              </button>
            </li>
          ) : (
            <li className="nav-item">
              <CustomLink to="/login">Log In</CustomLink>
            </li>
          )}
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
