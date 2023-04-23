import { createContext, useContext, useState } from "react";

export const CartContext = createContext({
  cartIsOpen: false,
  setCartIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (itemToAdd) => {
    const foundItem = cartItems?.find((item) => item.name === itemToAdd.name);
    if (foundItem) {
      setCartItems(
        cartItems.map((item) =>
          item.name === itemToAdd.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...itemToAdd, quantity: 1 }]);
    }
  };
  const total = cartItems.reduce((prev, item) => item.quantity + prev, 0);
  const value = { cartIsOpen, setCartIsOpen, cartItems, addItemToCart, total };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
