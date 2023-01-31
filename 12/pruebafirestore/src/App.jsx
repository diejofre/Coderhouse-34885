import { useEffect, useState } from "react";
import "./App.css";
import db from "../db/firebase-config.js";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import Grid from "./Grid";
import { Route, Routes } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function App() {
  const [items, setItems] = useState([]);
  const itemsCollectionRef = collection(db, "items");
  const [loading, setLoading] = useState(true);

  const getItems = async () => {
    const querySnapshot = await getDocs(itemsCollectionRef);
    setItems(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  };

  const deleteProduct = async (id) => {
    const itemDocRef = doc(db, "items", id);
    await deleteDoc(itemDocRef);
    getItems();
  };

  useEffect(() => {
    getItems();
  }, []);

  if (loading) {
    return <h3>Cargando...</h3>;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Bienvenido/as</h1>} />
        <Route
          path="/items"
          element={
            <Grid
              items={items}
              setItems={setItems}
              deleteProduct={deleteProduct}
            />
          }
        />
        <Route path="/items/:id" element={<ItemDetail />} />
        <Route path="*" element={<h4>404</h4>} />
      </Routes>
    </div>
  );
}

export default App;
