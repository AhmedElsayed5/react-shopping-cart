import React, { useCallback, useContext } from "react";
import "./Product.css";
import { ShopContext } from "../../context/ShopContext";

const Product = ({ item }) => {
  const { addToCart } = useContext(ShopContext);

  const handleAddCart = useCallback(() => {
    // console.log(evt.target.classList);
    addToCart(item.id);
  }, [item]);
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
      <button className="product__add-btn" onClick={handleAddCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
