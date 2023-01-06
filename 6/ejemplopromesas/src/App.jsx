import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Card from "./Card";

function App() {
  const [noticias, setNoticias] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputCuerpo, setInputCuerpo] = useState("");
  const [inputAutor, setInputAutor] = useState("");

  const getNoticas = () => {
    axios
      .get("http://localhost:3001/api/noticias")
      .then((res) => setNoticias(res.data.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/noticias", {
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

  useEffect(() => {
    getNoticas();
  }, []);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          onChange={(e) => setInputTitle(e.target.value)}
          value={inputTitle}
        />
        <input
          type="text"
          placeholder="Cuerpo"
          onChange={(e) => setInputCuerpo(e.target.value)}
          value={inputCuerpo}
        />
        <input
          type="text"
          placeholder="Autor"
          onChange={(e) => setInputAutor(e.target.value)}
          value={inputAutor}
        />
        <button type="submit">Agregar</button>
      </form>
      {noticias.map((noticia) => {
        return <Card key={noticia.id} noticia={noticia} />;
      })}
    </div>
  );
}

export default App;
