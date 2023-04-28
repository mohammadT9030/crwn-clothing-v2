import { useDispatch, useSelector } from "react-redux";
import PRODUCTS from "../../shop-data.json";
import { setProducts } from "../../store/products/products.actions";
import { useEffect } from "react";
import { selectProducts } from "../../store/products/products.selector";
import { addItemToCart } from "../../store/cart/cart.actions";

export const Shop = () => {
  const products = useSelector(selectProducts);

  const dispatch = useDispatch();

  console.log("### SHOP RENDER ###");

  useEffect(() => {
    setTimeout(() => dispatch(setProducts(PRODUCTS)), 2000);
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid",
            margin: "5px",
            padding: "5px",
          }}
        >
          <h2>{product.name}</h2>
          <p>{product.price}$</p>
          <button onClick={() => dispatch(addItemToCart(product))}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};
