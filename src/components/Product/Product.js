import React, { useCallback, useContext } from "react";
import "./Product.css";
import { ShopContext } from "../../context/ShopContext";

const Product = ({ item }) => {
  const { addToCart, cartItems } = useContext(ShopContext);

  const handleAddCart = useCallback(() => {
    addToCart(item.id);
  }, [item]);
  const cartItemAmount = cartItems.find((x) => x.id === item.id);
  // console.log(cartItemAmount);
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
        Add to Cart {cartItemAmount.count > 0 && <>({cartItemAmount.count})</>}
      </button>
    </div>
  );
};

export default Product;
