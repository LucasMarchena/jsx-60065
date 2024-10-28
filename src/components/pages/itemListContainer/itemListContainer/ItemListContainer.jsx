import { useEffect, useState } from "react";
import { ItemList } from "../itemList/ItemList";
import { products } from "../../../products";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);
  useEffect(() => {
    const fraccion = products.filter((producto) => producto.category === name);
    console.log(fraccion);
    const getProducts = new Promise((resolve) => {
      resolve(name ? fraccion : products);
    });
    getProducts.then((res) => {
      setItems(res);
    });
  }, [name]);
  return (
    <div className="container-il">
      <ItemList items={items} />
    </div>
  );
};
