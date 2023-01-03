import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <Button
        texto={"Sumar"}
        conditional={true}
        setContador={setContador}
        contador={contador}
      />
      <Button texto={"Restar"} setContador={setContador} contador={contador} />
      <h2>{contador}</h2>
    </div>
  );
}

export default App;
