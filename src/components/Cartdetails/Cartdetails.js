import React from "react";
import "./Cartdetails.css";

const Cartdetails = ({ cart }) => {
  console.log(cart);
  let total = 0;
  let shipingCost = 0;
  for (let product of cart) {
    console.log(product.price);
    total = total + product.price;
    shipingCost = shipingCost + product.shipping;
  }
  const Tax = (total * 0.1).toFixed(2);
  return (
    <div className="cartDilates">
      <h5>Order Summary</h5>
      <p>Number of products: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shipingCost}</p>
      <p>Tax: ${Tax}</p>
      <p>
        {" "}
        <strong>Grand Total: $1559</strong>
      </p>
    </div>
  );
};

export default Cartdetails;
