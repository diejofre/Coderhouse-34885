import { useEffect, useState } from "react";
import { Container, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./components/ProductCard";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import { db } from "../db/firebase-config.js";
import {
  doc,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { Route, Routes } from "react-router-dom";
import Grid from "./components/Grid";

function App() {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [favorite, setFavorite] = useState({});
  const [loading, setLoading] = useState(true);
  const productsCollectionRef = collection(db, "products");
  const favoritesCollectionRef = collection(db, "favorites");

  const getProducts = async () => {
    const data = await getDocs(productsCollectionRef); // pedido async
    setLoading(false);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const getFavorites = async () => {
    const data = await getDocs(favoritesCollectionRef);
    setFavorites(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const addFavorite = async (id) => {
    const product = products.find((product) => product.id === id);
    await addDoc(favoritesCollectionRef, product);
  };

  const deleteFavorite = async (id) => {
    const favoriteDoc = doc(db, "favorites", id);
    await deleteDoc(favoriteDoc);
  };

  const getFavorite = async (id) => {
    const favorite = favorites.find((favorite) => favorite.id === id);
    setFavorite(favorite);
  };

  useEffect(() => {
    getProducts();
    getFavorites();
  }, [favorites]);

  return (
    <>
      <NavBar
        products={products}
        favorites={favorites}
        deleteFavorite={deleteFavorite}
        getFavorite={getFavorite}
      />
      <Container maxW="container.lg">
        <Banner />
        <Routes>
          <Route
            path="/"
            element={
              <Grid
                loading={loading}
                products={products}
                addFavorite={addFavorite}
                deleteFavorite={deleteFavorite}
              />
            }
          />
          <Route
            path="/favorite/:id"
            element={
              <ProductCard
                key={favorite.id}
                id={favorite.id}
                image={favorite.image}
                title={favorite.title}
                price={favorite.price}
                description={favorite.description}
                category={favorite.category}
                deleteFavorite={deleteFavorite}
              />
            }
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
