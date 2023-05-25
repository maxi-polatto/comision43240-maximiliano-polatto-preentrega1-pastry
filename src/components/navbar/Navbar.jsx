import Carrito from "../carritoCompras/Cartrito";

const Navbar = () => {
  return (
    <nav>
      <img src="src/assets/img/todos los dia(1).png" className="img-logo"></img>
      <div>
        <button>Tortas</button>
        <button>Porciones</button>
        <button>Panes</button>
      </div>
      <Carrito />
    </nav>
  );
};

export default Navbar;
