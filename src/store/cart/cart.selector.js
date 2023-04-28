export const selectCartItems = (state) => state.cart.cartItems;
export const selectIsCartOpen = (state) => state.cart.isCartOpen;
export const selectTotalItems = (state) =>
  state.cart.cartItems.reduce(
    (prev, item) => item.quantity + prev,
    0
  );
