const TextComponent = ({ condition }) => {
  return <div className={condition ? "red" : "blue"}>Hola</div>;
};

export default TextComponent;
