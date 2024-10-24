import { useEffect, useState } from "react";
import { ItemList } from "../itemList/ItemList";
import { products } from "../../../products";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { category } = useParams();

  const [items, setItems] = useState([]);
  useEffect(() => {
    const fraccion = products.filter(
      (producto) => producto.category === category
    );
    const getProducts = new Promise((resolve) => {
      resolve(category ? fraccion : products);
    });
    getProducts.then((res) => {
      setItems(res);
    });
  }, [category]);
  return (
    <div className="container-il">
      <ItemList items={items} />
    </div>
  );
};
