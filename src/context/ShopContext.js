import React, { createContext, useState, useEffect } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext({ cartItems: [] });

const getDefaultCart = () => PRODUCTS.map((x) => ({ id: x.id, count: 0 }));
export const ShopContextProvider = (props) => {
  console.log(getDefaultCart());

  // useState(getDefaultCart());

  const [cartItems, setCartItems] = useState(getDefaultCart());
  // setCartItems(getDefaultCart());

  const addToCart = (itemId) => {
    console.log(itemId);
    //if item exists, increment

    //else add item first time
    const item = cartItems.find((x) => x.id === itemId);
    console.log(item);
    item.count++;
    console.log(item);
    const filteredItems = cartItems.filter((x) => x.id !== itemId);
    console.log(filteredItems);
    setCartItems([...filteredItems, item]);
  };

  const deleteFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId - 1] }));
  };

  const contextValue = { cartItems, addToCart, deleteFromCart };
  console.log(cartItems);
  // debugger;
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
