import { useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import { Route, Routes } from "react-router-dom";
import Grid from "./components/Grid";
import { db } from "../db/firebase-config.js";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import Product from "./components/Product";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const productsCollectionRef = collection(db, "products");

  const getProducts = async () => {
    const data = await getDocs(productsCollectionRef);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  };

  const update = async (id) => {
    // ir a firebase y actualizar el producto
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <NavBar products={products} />
      <Container maxW="container.lg">
        <Banner />
        <Routes>
          <Route
            path="/"
            element={<Grid loading={loading} products={products} />}
          />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
