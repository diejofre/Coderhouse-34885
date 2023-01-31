import db from "../../db/firebase-config.js";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useState } from "react";

const Form = ({ setItems }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputPrice, setInputPrice] = useState("");

  const createItem = async (e) => {
    e.preventDefault();
    const item = {
      title: inputTitle,
      price: inputPrice,
    };
    const itemsCollectionRef = collection(db, "items");
    await addDoc(itemsCollectionRef, item); //inserta el item en la colección
    const data = await getDocs(itemsCollectionRef);
    setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); //actualiza el estado de items
    setInputTitle("");
    setInputPrice("");
  };

  return (
    <div>
      <form onSubmit={createItem}>
        <input
          type="text"
          value={inputTitle}
          placeholder="Título"
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <input
          type="number"
          value={inputPrice}
          placeholder="Precio"
          onChange={(e) => setInputPrice(e.target.value)}
        />
        <button type="submit">Agregar ítem</button>
      </form>
    </div>
  );
};

export default Form;
