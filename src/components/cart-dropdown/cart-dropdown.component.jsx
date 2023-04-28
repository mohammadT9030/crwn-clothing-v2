import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

export const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div
      style={{
        position: "absolute",
        padding: "5px 15px",
        top: "60px",
        right: "20px",
        backgroundColor: "white",
      }}
    >
      <h3>DROPDOWN</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item.name}>
            {item.name}[{item.price}$]({item.quantity}x)
          </li>
        ))}
      </ul>
    </div>
  );
};
