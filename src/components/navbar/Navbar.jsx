import { NavLink, Link } from "react-router-dom";
import Carrito from "../carritoCompras/Cartrito";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="navbar-sup">
        <Link to="/">
          <img src="src/assets/img/todos los dia(1).png" className="img-logo" />
        </Link>
        <Link to="/">
          <h1>Todos Los Dias</h1>
        </Link>
        <Carrito />
      </div>

      <div className="Categorias">
        <NavLink
          to="/category/tortas"
          activeClassName="ActiveOption"
          className="Option"
        >
          Tortas
        </NavLink>
        <NavLink
          to="/category/clasicas"
          activeClassName="ActiveOption"
          className="Option"
        >
          Clásicas
        </NavLink>
        <NavLink
          to="/category/especiales"
          activeClassName="ActiveOption"
          className="Option"
        >
          Especiales
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
