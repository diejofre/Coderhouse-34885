import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="create">
        <button>Crear noticia</button>
      </Link>
      <Link to="/">
        <button>Volver al home</button>
      </Link>
    </nav>
  );
};

export default Navbar;
