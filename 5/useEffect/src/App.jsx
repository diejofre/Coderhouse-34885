import { useEffect, useState } from "react";
import "./App.css";
import Card from "./component/Card";

function App() {
  const [user, setUser] = useState({});
  //count
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, [count]);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Click me {count}</button>
      {count ? <Card user={user} /> : null}
    </div>
  );
}

export default App;
