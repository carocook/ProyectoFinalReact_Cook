import { useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import anilloGoldImg from "../assets/anillo-gold.jpg";
import anilloPlataImg from "../assets/anillo-plata.jpg";
import collarGoldImg from "../assets/collar-gold.jpg";
import collarPlataImg from "../assets/collar-plata.jpg";
import pulseraPlataImg from "../assets/pulsera-plata.jpg";
import "../styles/ItemListContainer.css";

const joyas = [
  {
    id: 1,
    nombre: "Anillo Ani Gold",
    precio: 120,
    category: "rings",
    img: anilloGoldImg,
  },
  {
    id: 2,
    nombre: "Anillo Livy Plata",
    precio: 120,
    category: "rings",
    img: anilloPlataImg,
  },
  {
    id: 3,
    nombre: "Collar Elisa Gold",
    precio: 80,
    category: "necklaces",
    img: collarGoldImg,
  },
  {
    id: 4,
    nombre: "Collar Michelle Plata",
    precio: 80,
    category: "necklaces",
    img: collarPlataImg,
  },
  {
    id: 5,
    nombre: "Pulsera Ari Plata",
    precio: 200,
    category: "bracelets",
    img: pulseraPlataImg,
  },
];

export default function ItemListContainer({ greeting, carrito, setCarrito }) {
  const { category } = useParams();

  const filteredJoyas = category
    ? joyas.filter((j) => j.category === category)
    : joyas;

  return (
    <section>
      <h2>{greeting}</h2>
      <div className="item-list">
        {filteredJoyas.map((joya) => (
          <ItemCard
            key={joya.id}
            producto={joya}
            carrito={carrito}
            setCarrito={setCarrito}
          />
        ))}
      </div>
    </section>
  );
}
