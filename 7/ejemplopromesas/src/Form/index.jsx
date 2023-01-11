const Form = ({
  handleSubmit,
  setInputTitle,
  setInputCuerpo,
  setInputAutor,
  inputTitle,
  inputCuerpo,
  inputAutor,
}) => {
  return (
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
  );
};

export default Form;
