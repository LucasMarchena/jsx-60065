import { Card } from "../card/Card";
import "./itemList.css";

export const ItemList = ({ myProducts }) => {
  return myProducts.map(({ id, title, price, stock, imageUrl }) => {
    <Card
      key={id}
      title={title}
      price={price}
      stock={stock}
      imageUrl={imageUrl}
    />;
  });
};
