import "./itemListContainer.css";
import { products } from "../../../products";
import { useEffect, useState } from "react";
import { ItemList } from "../itemList/ItemList";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getProducts = new Promise((res) => {
      res(products);
    });
    getProducts.then((res) => {
      setItems(res);
    });
  }, []);
  return <ItemList items={items} />;
};
