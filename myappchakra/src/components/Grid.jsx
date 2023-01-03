import { Center, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ProductCard from "./ProductCard";

const Grid = ({ products, addFavorite }) => {
  return (
    <Center>
      <SimpleGrid columns={2}>
        {products &&
          products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                addFavorite={addFavorite}
              />
            );
          })}
      </SimpleGrid>
    </Center>
  );
};

export default Grid;
