import "./itemDetail.css";

export const ItemDetail = ({ item }) => {
  return (
    <div className="detail-container">
      <h2 className="detail-title">{item.title}</h2>
      <h3 className="detail-description">{item.description}</h3>
      <img
        src={item.imageURL}
        alt="imagen del producto"
        className="detail-image"
      />
    </div>
  );
};
