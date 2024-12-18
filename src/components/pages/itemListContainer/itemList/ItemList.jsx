import { Card } from "../../../common/card/Card";
import "./itemList.css";

export const ItemList = ({ items }) => {
  return items.map(({ id, title, price, stock, imageURL }) => (
    <Card
      key={id}
      title={title}
      price={price}
      stock={stock}
      imageURL={imageURL}
      id={id}
    />
  ));
};
