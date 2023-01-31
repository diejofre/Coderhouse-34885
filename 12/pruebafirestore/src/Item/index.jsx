import styles from "./item.module.css";

const Item = ({ item }) => {
  return (
    <div className={styles.container}>
      <h2>{item.title}</h2>
      <p>{item.price} $</p>
    </div>
  );
};

export default Item;
