import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/ShopContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import "../Cart/Cart.css";
const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalPrice = getTotalAmount();
  return (
    <div className="cart">
      <div>
        <h1>Cart Items</h1>
      </div>
      <div>
        {PRODUCTS.map((product, index) => {
          const cartItem = cartItems.find((x) => x.id === product.id);
          if (cartItem.count > 0) {
            return <CartItem item={product} key={index} />;
          }
        })}
      </div>
      <div className="cart__checkout">
        <p>Subtotal: ${totalPrice}</p>
        <Link to="/">
          <button className="cart__continue-button">Continue Shopping</button>
        </Link>
        <button className="cart__continue-button">Checking</button>
      </div>
    </div>
  );
};

export default Cart;
