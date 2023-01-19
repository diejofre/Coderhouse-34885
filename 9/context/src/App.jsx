import { useState } from "react";
import { createContext, useContext } from "react";

const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
        Dark Mode
      </label>
    </ThemeContext.Provider>
  );
}

function Form() {
  return <Panel title="Welcome" />;
}

function Panel({ title }) {
  const theme = useContext(ThemeContext);
  const nameClass = "panel-" + theme;
  return (
    <div className={nameClass}>
      <h1>{title}</h1>
      <Button>Sign Up</Button>
      <Button>Log In</Button>
    </div>
  );
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const nameClass = "button-" + theme;
  return <button className={nameClass}>{children}</button>;
}

export default App;
