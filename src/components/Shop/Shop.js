import React, { useEffect, useState } from "react";
import useProducts from "../../hooks/useProducts";
import { addToDb, getCartaData } from "../../utilities/fakedb";
import Cartdetails from "../Cartdetails/Cartdetails";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products] = useProducts();
  const [cartdetails, Setcartdetails] = useState([]);

  //   cart details add
  const addToCart = (product) => {
    let newCartdetails = [];
    const exsits = cartdetails.find(
      (productArray) => productArray.id === product.id
    );
    if (!exsits) {
      product.quantity = 1;
      newCartdetails = [...cartdetails, product];
    } else {
      const rest = cartdetails.filter(
        (productArray) => productArray.id !== product.id
      );
      product.quantity = product.quantity + 1;
      newCartdetails = [...rest, exsits];
    }

    Setcartdetails(newCartdetails);
    addToDb(product.id);
  };
  // localstore data get useEffect
  useEffect(() => {
    const getCart = getCartaData();
    const saveCart = [];
    for (const id in getCart) {
      const product = products.find((product) => product.id === id);
      if (product) {
        const quantity = getCart[id];
        product.quantity = quantity;
        saveCart.push(product);
      }
    }
    Setcartdetails(saveCart);
  }, [products]);
  return (
    <div className="shop">
      <div>
        <h2>All Products: </h2>
        <div className="product-side">
          {products.slice(0, 20).map((product) => (
            <Product
              product={product}
              key={product.id}
              addToCart={addToCart}
            ></Product>
          ))}
        </div>
      </div>
      <div className="order-summary">
        <div className="order-items">
          <Cartdetails cart={cartdetails}></Cartdetails>
        </div>
      </div>
    </div>
  );
};

export default Shop;
