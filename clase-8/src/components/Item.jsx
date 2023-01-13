import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Item = function ({ name, description, score }) {
  return (
    <li>
      <FaArrowRight />
      <Link to={`${name}`}>
        <strong>{name}</strong>
      </Link>
      <small>- {description}</small>
      <em>score: {score}</em>
    </li>
  );
};

export default Item;
