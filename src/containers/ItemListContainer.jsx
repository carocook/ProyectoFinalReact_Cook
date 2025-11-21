import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import "../styles/ItemListContainer.css";

export default function ItemListContainer({ greeting }) {
  const [items, setItems] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    setItems(null);

    const productosRef = collection(db, "productos");

    const q = category
      ? query(productosRef, where("category", "==", category))
      : productosRef;

    getDocs(q)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(data);
      })
      .catch((err) => {
        console.error("Error al leer productos:", err);
        setItems([]);
      });
  }, [category]);

  if (items === null) return <p>Cargando productos...</p>;
  if (items.length === 0) return <p>No hay productos disponibles</p>;

  return (
    <>
      <h2>{greeting}</h2>
      <ItemList items={items} />
    </>
  );
}
