import "./itemListContainer.css";
import { products } from "../../products";
import { useEffect, useState } from "react";
import { ItemList } from "../../common/itemList/ItemList";

const myProductsPromise = new Promise((res, rej) => {
  products.length === 0 ? rej("productos vacios") : res(products);
});

export const ItemListContainer = () => {
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    myProductsPromise
      .then((data) => {
        setMyProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(myProducts);

  return (
    <div className="container-il">
      <ItemList myProducts={myProducts} />
    </div>
  );
};
