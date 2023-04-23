import { useCart } from "../../contexts.jsx/cart.context";
import { useProducts } from "../../contexts.jsx/products.context";
import SHOP_DATA from "../../shop-data.json";

export const Shop = () => {
  const { products } = useProducts();
  const { addItemToCart } = useCart();

  return (
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{ border: "1px solid", margin: "5px", padding: "5px" }}
        >
          <h2>{product.name}</h2>
          <p>{product.price}$</p>
          <button onClick={() => addItemToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};
