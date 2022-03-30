import { useEffect, useState } from "react";
import { getCartaData } from "../utilities/fakedb";

const useCart = (products) => {
  const [cartdetails, Setcartdetails] = useState([]);
  useEffect(() => {
    const cartData = getCartaData();
    let saveCart = [];
    for (const id in cartData) {
      const product = products.find((product) => product.id === id);
      if (product) {
        const quantity = cartData[id];
        product.quantity = quantity;
        saveCart.push(product);
      }
    }
    Setcartdetails(saveCart);
  }, [products]);
  return [cartdetails, Setcartdetails];
};

export { useCart };
