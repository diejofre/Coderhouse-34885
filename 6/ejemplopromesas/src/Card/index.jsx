import React from "react";

const Card = ({ noticia }) => {
  return (
    <div>
      <h2>{noticia.title}</h2>
      <p>{noticia.cuerpo}</p>
      <p>{noticia.autor}</p>
    </div>
  );
};

export default Card;
