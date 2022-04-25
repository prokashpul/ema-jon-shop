import { useEffect, useState } from "react";
import { getCartaData } from "../utilities/fakedb";

const useCart = () => {
  const [cartDetails, setCartDetails] = useState([]);
  useEffect(() => {
    const cartData = getCartaData();
    let saveCart = [];
    const keys = Object.keys(cartData);
    fetch("https://emajon-sever.herokuapp.com/product/keys", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        for (const id in cartData) {
          const product = products.find((product) => product._id === id);
          if (product) {
            const quantity = cartData[id];
            product.quantity = quantity;
            saveCart.push(product);
          }
        }
        setCartDetails(saveCart);
      });
  }, []);
  return [cartDetails, setCartDetails];
};

export { useCart };
