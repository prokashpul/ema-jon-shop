import React, { useState } from "react";

const Shipping = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const nameBlur = (e) => {
    setName(e.target.value);
  };
  const emailBlur = (e) => {
    setEmail(e.target.value);
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
              onBlur={emailBlur}
              type="email"
              name="email"
              id="email"
              required
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
