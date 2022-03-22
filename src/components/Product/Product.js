import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";
const Product = ({ product, addToCart }) => {
  const { name, category, price, img, ratings, seller } = product;
  return (
    <article className="product">
      <img src={img} alt="" />
      <div className="product-boddy">
        <div className="ptroduct-uptext">
          <h6>{name}</h6>
          <p>{category}</p>
          <p>Price: ${price}</p>
        </div>
        <div className="ptroduct-downtext">
          <p>Manufacturer : {seller}</p>
          <p>Rating :{ratings}</p>
        </div>
      </div>
      <button className="cart-btn" onClick={addToCart}>
        <span>Add to Cart</span>
        <FontAwesomeIcon icon={faCartPlus} />
      </button>
    </article>
  );
};

export default Product;
