import { MdMovie } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = function () {
  return (
    <header>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1>
          Movies & Series <MdMovie />
        </h1>
      </Link>
    </header>
  );
};

export default Header;
