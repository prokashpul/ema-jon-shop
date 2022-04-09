import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipping = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  console.log(name, phone, address);
  const nameBlur = (e) => {
    setName(e.target.value);
  };
  const phoneBlur = (e) => {
    setPhone(e.target.value);
  };
  const addressBlur = (e) => {
    setAddress(e.target.value);
  };
  const submitLogInHandel = (event) => {
    event.preventDefault();
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Shipping Address</h2>
        <form action="" onSubmit={submitLogInHandel}>
          <div className="form-group">
            <label htmlFor="email">Name</label>
            <input
              onBlur={nameBlur}
              type="name"
              name="name"
              id="name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={user?.email}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Phone</label>
            <input
              onBlur={phoneBlur}
              type="text"
              name="phone"
              id="phone"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Address</label>
            <input
              type="password"
              onBlur={addressBlur}
              name="password"
              id="password"
              required
            />
          </div>

          <input className="btn" type="submit" value="Shopping Now" />
        </form>
      </div>
    </div>
  );
};

export default Shipping;
