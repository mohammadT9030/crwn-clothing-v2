import { useProducts } from "../../contexts.jsx/products.context";
import SHOP_DATA from "../../shop-data.json";

export const Shop = () => {
  const { products } = useProducts();

  return (
    <div>
      {products.map((e) => (
        <h1 key={e.id}>{e.name}</h1>
      ))}
    </div>
  );
};
