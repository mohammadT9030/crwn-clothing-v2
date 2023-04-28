import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
};

const addCartItem = (cartItems, itemToAdd) => {
  const foundItem = cartItems?.find(
    (item) => item.name === itemToAdd.name
  );
  if (foundItem) {
    return cartItems.map((item) =>
      item.name === itemToAdd.name
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
  }
};

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, payload),
      };
    case CART_ACTION_TYPES.TOGGLE_CART_OPEN:
      return { ...state, isCartOpen: !state.isCartOpen };
    default:
      return state;
  }
};
