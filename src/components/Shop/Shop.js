import React, { useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";
// import useProducts from "../../hooks/useProducts";
import { addToDb } from "../../utilities/fakedb";
import Cartdetails from "../Cartdetails/Cartdetails";
import Product from "../Product/Product";
import "./Shop.css";
import { Link } from "react-router-dom";
import Title from "../../Title.function";
const Shop = () => {
  Title("Ema jon shop");
  // const [products] = useProducts();
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page, size]);
  useEffect(() => {
    fetch("http://localhost:5000/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      });
  }, []);

  //   cart details add
  const addToCart = (product) => {
    let newCartdetails = [];
    const exsits = cartdetails.find(
      (productArray) => productArray._id === product._id
    );
    if (!exsits) {
      product.quantity = 1;
      newCartdetails = [...cartdetails, product];
    } else {
      const rest = cartdetails.filter(
        (productArray) => productArray._id !== product._id
      );
      product.quantity = product.quantity + 1;
      newCartdetails = [...rest, exsits];
    }

    Setcartdetails(newCartdetails);
    addToDb(product._id);
  };
  // localstore data get useEffect
  const [cartdetails, Setcartdetails] = useCart(products);
  return (
    <div className="shop">
      <div>
        <h2>All Products: </h2>
        <div className="product-side">
          {products.map((product) => (
            <Product
              product={product}
              key={product._id}
              addToCart={addToCart}
            ></Product>
          ))}
        </div>
        <div className="pagination">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              key={number}
              className={page === number ? "selected" : ""}
              onClick={() => setPage(number)}
            >
              {number + 1}
            </button>
          ))}
          <select
            className="pageSelected"
            onChange={(event) => setSize(event.target.value)}
          >
            <option value="5">5</option>
            <option Value="10" selected>
              10
            </option>
            <option value="15">15</option>
          </select>
        </div>
      </div>

      <div className="order-summary shop-right">
        <div className="order-items">
          <Cartdetails cart={cartdetails}>
            <Link to="/order" className="btn">
              Cart Reviews
            </Link>
          </Cartdetails>
        </div>
      </div>
    </div>
  );
};

export default Shop;
