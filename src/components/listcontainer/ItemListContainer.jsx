import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { getProducts, getProductByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getProducts;
    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;
