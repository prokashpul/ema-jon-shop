import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";
const LogIn = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Log In</h2>
        <form action="">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <input className="btn" type="submit" value="Log In" />
        </form>
        <div className="form-link">
          Not a Member ? <Link to="/sinup">Create An Account</Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
