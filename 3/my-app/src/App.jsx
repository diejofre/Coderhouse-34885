import "./App.css";
import Item from "./Item";

const frutas = ["Manzana", "Pera", "Sandía", "Melón", "Durazno"];

function App() {
  function handleClick() {
    alert("Argentina campeón");
  }

  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <button onClick={handleClick}>Mostrar mensaje</button>
      <ul>
        {frutas.map((fruta, i) => (
          <Item key={i} fruta={fruta} />
        ))}
      </ul>
    </div>
  );
}

export default App;
