import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";
import "../styles/Item.css";
import "../styles/ItemCount.css";

export default function Item({ item }) {
  const { addItem } = useCart();
  const [addedQty, setAddedQty] = useState(0);

  const imgSrc = item.img || "/placeholder.png";

  const onAdd = (qty) => {
    addItem(
      {
        id: item.id,
        nombre: item.nombre,
        price: item.precio,
        img: item.img,
        priceKey: item.precio,
        priceNumber: item.precio,
        priceValue: item.precio,
        priceCurrency: "ARS",
        priceFormatted: item.precio,
      },
      qty
    );
    setAddedQty(qty);
  };

  return (
    <div className="item-card">
      <Link
        to={`/product/${item.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img src={imgSrc} alt={item.nombre} className="item-img" />
        <h3>{item.nombre}</h3>
        <p>$ {item.precio}</p>
      </Link>

      {item.stock === 0 && (
        <p style={{ color: "red", margin: "0.5rem 0" }}>Sin stock</p>
      )}

      {!addedQty && item.stock > 0 && (
        <ItemCount stock={item.stock || 10} initial={1} onAdd={onAdd} />
      )}

      {addedQty > 0 && (
        <div style={{ marginTop: "1rem" }}>
          <p style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>
            {addedQty} unid. agregada(s)
          </p>
          <Link to="/cart">
            <button>Ir al Carrito</button>
          </Link>
        </div>
      )}
    </div>
  );
}
