import { CART_ACTION_TYPES } from "./cart.types";

export const addItemToCart = (item) => {
  return {
    type: CART_ACTION_TYPES.ADD_ITEM_TO_CART,
    payload: item,
  };
};

export const toggleCartOpen = () => {
  return { type: CART_ACTION_TYPES.TOGGLE_CART_OPEN };
};
