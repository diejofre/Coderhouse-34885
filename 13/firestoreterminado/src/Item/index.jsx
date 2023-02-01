import styles from "./item.module.css";

const Item = ({ item, deleteProduct }) => {
  return (
    <div className={styles.container}>
      <h2>{item.title}</h2>
      <p>{item.price} $</p>
      <button onClick={() => deleteProduct(item.id)}>Eliminar</button>
    </div>
  );
};

export default Item;
