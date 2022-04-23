import { useEffect, useState } from "react";
import { getCartaData } from "../utilities/fakedb";

const useCart = (products) => {
  const [cartDetails, setCartDetails] = useState([]);
  useEffect(() => {
    const cartData = getCartaData();
    let saveCart = [];
    for (const id in cartData) {
      const product = products.find((product) => product._id === id);
      if (product) {
        const quantity = cartData[id];
        product.quantity = quantity;
        saveCart.push(product);
      }
    }
    setCartDetails(saveCart);
  }, [products]);
  return [cartDetails, setCartDetails];
};

export { useCart };
