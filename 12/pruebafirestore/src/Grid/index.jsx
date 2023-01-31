import { Link } from "react-router-dom";
import Item from "../Item";

const Grid = ({ items }) => {
  return (
    <>
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
