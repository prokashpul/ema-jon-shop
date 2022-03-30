import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Reviews.css";
const Reviews = ({ product, removeToCart }) => {
  const { img, price, shipping, name, quantity } = product;
  return (
    <div className="reviews">
      <div className="cart">
        <img src={img} alt="" width="80" height="80" />
        <div>
          <h4>{name.length > 30 ? name.slice(0, 30) + "...." : name}</h4>
          <h5>
            Price: $<span>{price}</span>
          </h5>
          <p>
            Quantity: <span>{quantity}</span>
          </p>
          <p>
            Shipping: <span>${shipping}</span>
          </p>
        </div>
      </div>
      <button className="delete-btn" onClick={() => removeToCart(product)}>
        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>{" "}
      </button>
    </div>
  );
};

export default Reviews;
