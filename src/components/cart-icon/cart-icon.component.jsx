import { useDispatch, useSelector } from "react-redux";
import { selectTotalItems } from "../../store/cart/cart.selector";
import { toggleCartOpen } from "../../store/cart/cart.actions";

export const CartIcon = () => {
  const totalItems = useSelector(selectTotalItems);
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(toggleCartOpen());
      }}
      style={{ cursor: "pointer" }}
    >
      <span>🛒</span>
      <span>{totalItems}</span>
    </div>
  );
};
