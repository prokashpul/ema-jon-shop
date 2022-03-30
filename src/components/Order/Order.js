import React from "react";
import useProducts from "../../hooks/useProducts";
const Order = () => {
  const [products] = useProducts();
  return <div>{products.length}</div>;
};

export default Order;
