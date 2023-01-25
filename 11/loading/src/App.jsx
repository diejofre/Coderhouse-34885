import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Spinner from "./Spinner";
import TextComponent from "./TextComponent";
import Footer from "./Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  // if (loading) {
  //   return <Spinner />;
  // }

  return (
    <>
      {loading && <h2>Loading ...</h2>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          {/* {products.map((product) => {
            return (
              <div key={product.id}>
                <img src={product.image} alt="" />
                <p>{product.title}</p>
              </div>
            );
          })} */}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <h2>{input}</h2>
          <TextComponent condition={false} />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
