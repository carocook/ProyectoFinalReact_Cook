import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setItem(null);
    const ref = doc(db, "productos", id);

    getDoc(ref)
      .then((snapshot) => {
        if (snapshot.exists()) setItem({ id: snapshot.id, ...snapshot.data() });
        else setItem(undefined);
      })
      .catch((err) => {
        console.error("Error al leer detalle:", err);
        setItem(undefined);
      });
  }, [id]);

  if (item === null) return <p>Cargando detalle...</p>;
  if (item === undefined) return <p>Producto no encontrado</p>;

  return <ItemDetail producto={item} />;
}
