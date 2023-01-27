import { useEffect, useState } from "react";
import "./App.css";
import db from "../db/firebase-config.js";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [items, setItems] = useState([]);
  const itemsCollectionRef = collection(db, "items");

  const getItems = async () => {
    const querySnapshot = await getDocs(itemsCollectionRef);
    const docs = querySnapshot.docs.map((doc) => doc.data());
    setItems(docs);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="App">
      {items.map((item) => {
        return <p>{item.title}</p>;
      })}
    </div>
  );
}

export default App;
