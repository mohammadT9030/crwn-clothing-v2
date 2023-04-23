import { useCart } from "../../contexts.jsx/cart.context";

export const CartIcon = () => {
  const { setCartIsOpen, total } = useCart();
  return (
    <div
      onClick={() => {
        setCartIsOpen((s) => !s);
      }}
      style={{ cursor: "pointer" }}
    >
      <span>🛒</span>
      <span>{total}</span>
    </div>
  );
};
