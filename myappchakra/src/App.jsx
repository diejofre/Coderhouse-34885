import { useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import { Route, Routes } from "react-router-dom";
import Grid from "./components/Grid";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {}, []);

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
        </Routes>
      </Container>
    </>
  );
}

export default App;
