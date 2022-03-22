import React from "react";
import "./Cartdetails.css";

const Cartdetails = ({ cart }) => {
  console.log(cart);
  return (
    <div>
      <h6>Number of products: {cart.length}</h6>
    </div>
  );
};

export default Cartdetails;
