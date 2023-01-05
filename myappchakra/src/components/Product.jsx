import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../db/firebase-config.js";
import { doc, getDoc } from "firebase/firestore";

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const getProduct = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setProduct(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
};

export default Product;
