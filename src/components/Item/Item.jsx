import PropTypes from "prop-types";
import "./Item.css";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Precio: $ {price}</p>
        <p className="Info">Stock: {stock}</p>
      </section>
      <footer className="ItemFooter">
        <link to={`/item/${id}`} className="option">
          Ver talle
        </link>
      </footer>
    </article>
  );
};

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
};

export default Item;
