import { Link } from "react-router-dom";
import "./card.css";

export const Card = ({ title, price, stock, imageURL, id }) => {
  return (
    <div className="container-card">
      <img src={imageURL} alt="imagen producto" />
      <h2>{title}</h2>
      <h3>{price}</h3>
      <h3>Stock: {stock}</h3>
      <Link to={`/itemDetail/${id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
};
