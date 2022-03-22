import React, { useEffect, useState } from "react";
import Cartdetails from "../Cartdetails/Cartdetails";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cartdetails, Setcartdetails] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //   cart details add
  const addToCart = () => {
    const newCartdetails = [...cartdetails, products];
    Setcartdetails(newCartdetails);
  };
  return (
    <div className="shop">
      <div className="product-side">
        {products.slice(0, 20).map((product) => (
          <Product
            product={product}
            key={product.id}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <div className="order-summary">
        <div className="order-items">
          <h5>Order Summary</h5>
          <Cartdetails cart={cartdetails}></Cartdetails>
        </div>
      </div>
    </div>
  );
};

export default Shop;
