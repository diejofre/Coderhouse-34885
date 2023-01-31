import { useEffect, useState } from "react";
import "./App.css";
import db from "../db/firebase-config.js";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import Grid from "./Grid";
import { Route, Routes, useParams } from "react-router-dom";
import Item from "./Item";

function App() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({});
  const itemsCollectionRef = collection(db, "items");

  const { id } = useParams();

  const getItem = async (id) => {
    const itemDocRef = doc(db, "items", id);
    const itemDoc = await getDoc(itemDocRef);
    if (itemDoc.exists()) {
      setItem(itemDoc.data());
    } else {
      return null;
    }
  };
  const getItems = async () => {
    const querySnapshot = await getDocs(itemsCollectionRef);
    setItems(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Bienvenido/as</h1>} />
        <Route
          path="/items"
          element={<Grid items={items} getItem={getItem} />}
        />
        <Route path="/items/:id" element={<Item item={item} />} />
      </Routes>
    </div>
  );
}

export default App;
