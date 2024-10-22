import { Card } from "../card/Card";
import "./itemList.css";

const ItemList = ({ myProducts }) => {
  return myProducts.map(({ id, title, price, stock, imageUrl }) => {
    return (
      <Card
        key={id}
        title={title}
        price={price}
        stock={stock}
        imageUrl={imageUrl}
      />
    );
  });
};

export default ItemList;
