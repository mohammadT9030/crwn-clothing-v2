import { useCart } from "../../contexts.jsx/cart.context";

export const CartIcon = () => {
  const { setCartIsOpen } = useCart();
  return (
    <div
      onClick={() => {
        setCartIsOpen((s) => !s);
      }}
      style={{ cursor: "pointer" }}
    >
      <span>🛒</span>
      <span>0</span>
    </div>
  );
};
