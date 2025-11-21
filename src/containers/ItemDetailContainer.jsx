import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../components/ItemCount";
import NotFound from "../components/NotFound";
import anilloGoldImg from "../assets/anillo-gold.jpg";
import anilloPlataImg from "../assets/anillo-plata.jpg";
import collarGoldImg from "../assets/collar-gold.jpg";
import collarPlataImg from "../assets/collar-plata.jpg";
import pulseraPlataImg from "../assets/pulsera-plata.jpg";
import "../styles/ItemCard.css";

const joyas = [
  { id: 1, nombre: "Anillo Ani Gold", precio: 120, img: anilloGoldImg },
  { id: 2, nombre: "Anillo Livy Plata", precio: 120, img: anilloPlataImg },
  { id: 3, nombre: "Collar Elisa Gold", precio: 80, img: collarGoldImg },
  { id: 4, nombre: "Collar Michelle Plata", precio: 80, img: collarPlataImg },
  { id: 5, nombre: "Pulsera Ari Plata", precio: 200, img: pulseraPlataImg },
];

function fetchProductById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(joyas.find((p) => p.id === Number(id)));
    }, 300);
  });
}

export default function ItemDetailContainer({ carrito, setCarrito }) {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchProductById(id).then((data) => {
      if (data) setProducto(data);
      else setNotFound(true);
    });
  }, [id]);

  const handleAddToCart = (cantidad) => {
    const existe = carrito.find((item) => item.id === producto.id);
    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad }]);
    }
  };

  if (notFound) return <NotFound />;
  if (!producto) return <p>Cargando producto...</p>;

  return (
    <div className="item-card">
      <img src={producto.img} alt={producto.nombre} />
      <h4>{producto.nombre}</h4>
      <p>Precio: ${producto.precio}</p>
      <ItemCount stock={20} initial={1} onAdd={handleAddToCart} />
    </div>
  );
}
