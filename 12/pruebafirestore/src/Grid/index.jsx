import { Link } from "react-router-dom";
import Form from "../Form";
import Item from "../Item";

const Grid = ({ items, setItems }) => {
  return (
    <>
      <Form setItems={setItems} />
      {items.map((item) => {
        return (
          <Link to={`${item.id}`} key={item.id}>
            <Item item={item} />
          </Link>
        );
      })}
    </>
  );
};

export default Grid;
