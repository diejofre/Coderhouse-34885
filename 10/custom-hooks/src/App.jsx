import "./App.css";
import useAxios from "./customHooks/useAxios";

function App() {
  const { data } = useAxios("https://jsonplaceholder.typicode.com/posts");

  return (
    <>
      {data.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
    </>
  );
}

export default App;
