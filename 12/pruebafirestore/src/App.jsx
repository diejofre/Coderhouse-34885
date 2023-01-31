import { useEffect, useState } from "react";
import "./App.css";
import db from "../db/firebase-config.js";
import { collection, getDocs } from "firebase/firestore";
import Grid from "./Grid";

function App() {
  const [items, setItems] = useState([]);
  const itemsCollectionRef = collection(db, "items");

  const getItems = async () => {
    const querySnapshot = await getDocs(itemsCollectionRef);
    setItems(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="App">
      <Grid items={items} />
    </div>
  );
}

export default App;
