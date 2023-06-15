import { NavLink, Link } from "react-router-dom";
import Carrito from "../carritoCompras/Cartrito";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <Link to="/">
        <h1>Todos Los Dias</h1>
      </Link>
      <img src="src/assets/img/todos los dia(1).png" className="img-logo" />
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
      <Carrito />
    </nav>
  );
};

export default Navbar;
