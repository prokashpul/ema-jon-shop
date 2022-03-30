import React from "react";
import { useCart } from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cartdetails from "../Cartdetails/Cartdetails";
import Reviews from "../Reviews/Reviews";
import "./Order.css";
const Order = () => {
  const [products] = useProducts();
  const [cartdetails] = useCart(products);
  return (
    <div>
      <div className="shop">
        <div>
          <h2>Reviews Products: </h2>
          <div className="product-cart">
            {cartdetails.map((product) => (
              <Reviews product={product} key={product.id}></Reviews>
            ))}
          </div>
        </div>
        <div className="order-summary">
          <div className="order-items">
            <Cartdetails cart={cartdetails}></Cartdetails>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
