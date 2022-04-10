import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import "./SinUp.css";
import auth from "../../firebase.init";
import google from "../../images/Google.svg";

const SinUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [errorMassage, setErrorMassage] = useState("");
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const emailHandel = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandel = (event) => {
    setPassword(event.target.value);
  };

  const conformPasswordHandel = (event) => {
    setConformPassword(event.target.value);
  };

  const submitFormHandel = (event) => {
    event.preventDefault();
    if (password !== conformPassword) {
      setErrorMassage("Password didn't mach !!!");
      return;
    }
    if (password.length < 6) {
      setErrorMassage("Password must be 6 letter up !!!");
      return;
    }

    createUserWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sin Up</h2>
        <form action="" onSubmit={submitFormHandel}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={emailHandel}
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={passwordHandel}
              type="password"
              name="password"
              id="password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="conformPassword">Conform Password</label>
            <input
              onBlur={conformPasswordHandel}
              type="password"
              name="conformPassword"
              id="conformPassword"
              required
            />
          </div>
          <p className="error-massage">{errorMassage}</p>

          <input className="btn" type="submit" value="Sin Up" />
        </form>
        <div className="other-sinin">
          <span></span>
          <p>Sin Up with Other</p>
          <span></span>
        </div>
        <button
          onClick={() =>
            signInWithGoogle().then(() => {
              navigate(from, { replace: true });
            })
          }
          className=" google-button"
        >
          {" "}
          <img src={google} alt="" /> Sin Up with Google
        </button>
        <div className="form-link">
          Already a Member <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default SinUp;
