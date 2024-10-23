import { Card } from "../../../common/card/Card";
import "./itemList.css";

export const ItemList = ({ myProducts }) => {
  return (
    <>
      <h2>listado de productos</h2>

      <div>
        return{" "}
        {myProducts.map(({ id, title, price, stock, imageURL }) => {
          <Card
            key={id}
            title={title}
            price={price}
            stock={stock}
            imageURL={imageURL}
          />;
        })}
      </div>
    </>
  );
};
