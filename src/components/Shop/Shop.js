import React from "react";
import { PRODUCTS } from "../../products";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  console.log({ PRODUCTS });
  return (
    <div className="shop__content">
      <div className="shop__title">
        <h1>Tech Shop</h1>
      </div>
      <div className="shop__products">
        {PRODUCTS.map((product, index) => (
          <Product item={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
