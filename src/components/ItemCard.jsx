import { Link } from "react-router-dom";
import "../styles/ItemCard.css";

function ItemCard({ producto, carrito, setCarrito }) {
  const agregarAlCarrito = () => {
    const existe = carrito.find((item) => item.id === producto.id);
    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  return (
    <div className="item-card">
      <img src={producto.img} alt={producto.nombre} />
      <Link to={`/product/${producto.id}`} className="item-link">
        <h4>{producto.nombre}</h4>
      </Link>
      <p>Precio: ${producto.precio}</p>
      <button onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCard;
