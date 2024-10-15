import "./card.css";

export const Card = ({ title, price, stock, imageUrl }) => {
  return (
    <div className="container-card">
      <img src={imageUrl} alt="imagen producto" />
      <h2>Titulo: {title}</h2>
      <h3>Precio: {price}</h3>
      <h3>Stock: {stock}</h3>
    </div>
  );
};
