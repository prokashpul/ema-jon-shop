import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cartdetails from "../Cartdetails/Cartdetails";
import Reviews from "../Reviews/Reviews";
import "./Order.css";
const Order = () => {
  const [products] = useProducts();
  const [cartDetails, setCartDetails] = useCart(products);

  const removeToCart = (product) => {
    const rest = cartDetails.filter((pd) => pd.id !== product.id);
    setCartDetails(rest);
    removeFromDb(product.id);
  };
  return (
    <div>
      <div className="shop">
        <div>
          <h2>Reviews Products: </h2>
          <div className="product-cart">
            {cartDetails.map((product) => (
              <Reviews
                removeToCart={removeToCart}
                product={product}
                key={product.id}
              ></Reviews>
            ))}
          </div>
        </div>
        <div className="order-summary">
          <div className="order-items">
            <Cartdetails cart={cartDetails}>
              <Link to="/shipping" className="btn">
                shipping Check
              </Link>
            </Cartdetails>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
