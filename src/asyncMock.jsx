import selvaNegraImg from "./assets/img/selva negra.jpg";
import mimosaImg from "./assets/img/mimosa.jpg";
import cuoreImg from "./assets/img/corazonchoco.jpg";

const products = [
  {
    id: "1",
    name: "Torta Selva Negra",
    price: 5500,
    img: selvaNegraImg,
    stock: 100,
    Description:
      "Biscochuelo de chocolate relleno de dos capas de crema fresca y cerezas amarenas",
  },
  {
    id: "2",
    name: "Torta Mimosa",
    price: 4000,
    img: mimosaImg,
    stock: 100,
    Description:
      "Biscocuelo de vainilla de 3 capas relleno de crema chantilly y pastelera de banana",
  },
  {
    id: "3",
    name: "Torta Cuore",
    price: 4000,
    img: cuoreImg,
    stock: 100,
    Description:
      "Biscochuelo de chocolate intenso de tres capas con forma de corazón, relleno con praline de avellanas y crema fresca",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};
export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};
