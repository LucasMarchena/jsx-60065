export const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>{item.title}</h2> <h3>{item.description}</h3>
      <img src={item.imageURL} alt="imagen del producto" />
    </div>
  );
};
