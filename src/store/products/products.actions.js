import { PRODUCTS_ACTION_TYPES } from "./products.type";

export const setProducts = (products) => {
  return {
    type: PRODUCTS_ACTION_TYPES.SET_PRODUCTS,
    payload: products,
  };
};
