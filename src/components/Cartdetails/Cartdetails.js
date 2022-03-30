import React from "react";
import "./Cartdetails.css";

const Cartdetails = ({ cart, children }) => {
  // console.log(cart);
  let total = 0;
  let shipingCost = 0;
  let quantity = 0;
  for (let product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipingCost = shipingCost + product.shipping;
  }
  const Tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = (total + shipingCost + Tax).toFixed(2);
  return (
    <div className="cartDilates">
      <h5>Order Summary</h5>
      <p>Number of products: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shipingCost}</p>
      <p>Tax: ${Tax}</p>
      <p>
        <strong>Grand Total: ${grandTotal}</strong>
      </p>
      {children}
    </div>
  );
};

export default Cartdetails;
