import React from "react";
import "./Product.css";
const Product = ({ item }) => {
  return (
    <div className="product">
      <img
        className="product__image"
        src={item.productImage}
        alt={item.productName}
      />
      <div className="product__description">
        <p>
          <b>{item.productName}</b>
        </p>
        <p>${item.price}</p>
      </div>
      <button className="product__add-btn">Add to Cart</button>
    </div>
  );
};

export default Product;
