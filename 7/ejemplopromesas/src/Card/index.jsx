const Card = ({ noticia, deleteElement }) => {
  return (
    <div>
      <h2>{noticia.title}</h2>
      <p>{noticia.cuerpo}</p>
      <p>{noticia.autor}</p>
      <button onClick={() => deleteElement(noticia.id)}>Eliminar</button>
    </div>
  );
};

export default Card;
