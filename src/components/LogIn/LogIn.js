import React, { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import google from "../../images/Google.svg";
import "./LogIn.css";
const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const emailLigInBlur = (event) => {
    setEmail(event.target.value);
  };
  const passwordLigInBlur = (event) => {
    setPassword(event.target.value);
  };
  const submitLogInHandel = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Log In</h2>
        <form action="" onSubmit={submitLogInHandel}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={emailLigInBlur}
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onBlur={passwordLigInBlur}
              name="password"
              id="password"
              required
            />
          </div>
          <p style={{ color: "red", marginBottom: "10px" }}>
            {error && error.message.includes("auth/wrong-password")
              ? "Email and password invalid"
              : ""}
          </p>
          <p>{loading && <p>Loading...</p>}</p>
          <input className="btn" type="submit" value="Log In" />
        </form>
        <div className="other-sinin">
          <span></span>
          <p>Sin in with Other</p>
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
          <img src={google} alt="" /> Log In with Google
        </button>
        <div className="form-link">
          Not a Member ? <Link to="/sinup">Create An Account</Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
