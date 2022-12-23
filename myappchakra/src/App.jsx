import { useState } from "react";
import { Button, Container, Flex } from "@chakra-ui/react";
import products from "../products.json";
import ProductCard from "./components/ProductCard";

function App() {
  const [productos, setProductos] = useState([]);

  return (
    <Container>
      <Flex>
        <Button colorScheme="green" onClick={() => setProductos(products)}>
          Mostrar productos
        </Button>
        <Button colorScheme="green" onClick={() => setProductos([])}>
          Ocultar productos
        </Button>
      </Flex>
      {productos.map((producto) => {
        return (
          <ProductCard
            key={producto.id}
            image={producto.image}
            title={producto.title}
            price={producto.price}
            description={producto.description}
          />
        );
      })}
    </Container>
  );
}

export default App;
