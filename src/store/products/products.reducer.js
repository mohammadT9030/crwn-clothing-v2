import { PRODUCTS_ACTION_TYPES } from "./products.type";

const INITIAL_VALUE = {
  products: [],
};

export const productsReducer = (
  state = INITIAL_VALUE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_ACTION_TYPES.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
