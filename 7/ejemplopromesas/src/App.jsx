import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Card from "./Card";
import Form from "./Form";
import Navbar from "./Navbar";

const urlNoticias = "http://localhost:3001/api/noticias";

function App() {
  const [noticias, setNoticias] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputCuerpo, setInputCuerpo] = useState("");
  const [inputAutor, setInputAutor] = useState("");

  const getNoticias = () => {
    axios.get(urlNoticias).then((res) => setNoticias(res.data.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(urlNoticias, {
        title: inputTitle,
        cuerpo: inputCuerpo,
        autor: inputAutor,
      })
      .then((res) => {
        setNoticias([...noticias, res.data.data]);
      });
    setInputAutor("");
    setInputCuerpo("");
    setInputTitle("");
  };

  const deleteElement = (id) => {
    axios.delete(`${urlNoticias}/${id}`).then(() => {
      setNoticias(noticias.filter((noticia) => noticia.id !== id));
    });
  };

  const deleteAll = () => {
    setNoticias([]);
  };

  useEffect(() => {
    getNoticias();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<p>Bienvenido al sitio de noticias</p>} />
        <Route
          path="/create"
          element={
            <Form
              handleSubmit={handleSubmit}
              setInputTitle={setInputTitle}
              setInputAutor={setInputAutor}
              setInputCuerpo={setInputCuerpo}
              inputAutor={inputAutor}
              inputCuerpo={inputCuerpo}
              inputTitle={inputTitle}
            />
          }
        />
      </Routes>

      {noticias.map((noticia) => {
        return (
          <Card
            key={noticia.id}
            noticia={noticia}
            deleteElement={deleteElement}
          />
        );
      })}
    </div>
  );
}

export default App;
