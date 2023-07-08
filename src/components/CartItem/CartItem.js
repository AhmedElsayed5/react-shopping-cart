import React, { useContext, useState } from "react";
import { PRODUCTS } from "../../products";
import "../CartItem/CartItem.css";
import { ShopContext } from "../../context/ShopContext";

const CartItem = ({ item }) => {
  const { cartItems, addToCart, deleteFromCart, updateCartCount } =
    useContext(ShopContext);
  const itemFromContext = cartItems.find((x) => x.id === item.id);
  console.log(itemFromContext);
  console.log(item);
  const [itemFromContextCount, setitemFromContextCount] = useState(
    itemFromContext.count
  );
  return (
    <div className="cartItems">
      <div className="cartItem">
        <img className="cartItem__image" src={item.productImage} />
        <div className="cartItem__description">
          <p>
            <b>{item.productName}</b>
          </p>
          <p>{item.price}$</p>
          <div className="cartItem__count-handler">
            <button
              onClick={() => {
                addToCart(item.id);
                setitemFromContextCount(itemFromContext.count);
              }}
            >
              +
            </button>
            <input
              className="cartItem__input"
              value={itemFromContextCount}
              onChange={(e) => {
                updateCartCount(Number(e.target.value), item.id);
                setitemFromContextCount(itemFromContext.count);
              }}
            />
            <button
              onClick={() => {
                deleteFromCart(item.id);
                setitemFromContextCount(itemFromContext.count);
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
