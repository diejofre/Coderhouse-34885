import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./itemDetail.module.css";
import db from "../../db/firebase-config.js";
import { doc, getDoc } from "firebase/firestore";

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  const getItem = async (id) => {
    const itemDocRef = doc(db, "items", id);
    const itemDoc = await getDoc(itemDocRef);
    if (itemDoc.exists()) {
      setItem(itemDoc.data());
    } else {
      return null;
    }
  };

  useEffect(() => {
    getItem(id);
  }, []);

  return (
    <div className={styles.container}>
      <h2>{item.title}</h2>
      <p>{item.price} $</p>
    </div>
  );
};

export default ItemDetail;
