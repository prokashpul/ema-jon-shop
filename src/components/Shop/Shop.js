import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop">
      <div className="product-side">
        {products.slice(0, 20).map((product) => (
          <Product product={product} key={product.id}></Product>
        ))}
      </div>
      <div className="order-summary">
        <div className="order-items">
          <h5>Order Summary</h5>
        </div>
      </div>
    </div>
  );
};

export default Shop;
