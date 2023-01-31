import styles from "./item.module.css";
import db from "../../db/firebase-config.js";
import { doc, getDoc } from "firebase/firestore";

const Item = ({ item }) => {
  return (
    <div className={styles.container}>
      <h2>{item.title}</h2>
      <p>{item.price} $</p>
    </div>
  );
};

export default Item;
