import React, { createContext, useState, useEffect } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext({ cartItems: [] });

const getDefaultCart = () => PRODUCTS.map((x) => ({ id: x.id, count: 0 }));
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalAmount = () => {
    let totalPrice = 0;
    cartItems.forEach((element) => {
      let priceNumber = PRODUCTS.find((x) => x.id === element.id);
      console.log(priceNumber);
      totalPrice += priceNumber.price * element.count;
    });
    console.log(totalPrice);
    return totalPrice;
  };

  const addToCart = (itemId) => {
    const item = cartItems.find((x) => x.id === itemId);
    item.count++;
    const filteredItems = cartItems.filter((x) => x.id !== itemId);
    setCartItems([...filteredItems, item]);
  };

  const deleteFromCart = (itemId) => {
    const item = cartItems.find((x) => x.id === itemId);
    if (item.count > 0) {
      item.count--;
      const filteredItems = cartItems.filter((x) => x.id !== itemId);
      setCartItems([...filteredItems, item]);
    }
  };

  const updateCartCount = (newValue, itemId) => {
    const item = cartItems.find((x) => x.id === itemId);
    if (newValue >= 0 && newValue <= 1000) {
      item.count = newValue;
      const filteredItems = cartItems.filter((x) => x.id !== itemId);
      setCartItems([...filteredItems, item]);
    }
  };

  const contextValue = {
    cartItems,
    addToCart,
    deleteFromCart,
    updateCartCount,
    getTotalAmount,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
