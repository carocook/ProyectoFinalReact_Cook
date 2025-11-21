import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/ItemDetail.css";
import "../styles/ItemCount.css";
import "../styles/Item.css";

export default function ItemDetail({ producto }) {
  const { addItem } = useCart();
  const [addedQty, setAddedQty] = useState(0);

  const onAdd = (qty) => {
    addItem(
      {
        id: producto.id,
        nombre: producto.nombre,
        price: producto.precio,
        img: producto.img,
        priceKey: producto.precio,
        priceNumber: producto.precio,
        priceValue: producto.precio,
        priceCurrency: "ARS",
        priceFormatted: producto.precio,
      },
      qty
    );
    setAddedQty(qty);
  };

  const imgSrc = producto.img || "/placeholder.png";

  return (
    <div className="item-detail">
      {" "}
      <img src={imgSrc} alt={producto.nombre} className="detail-img" />
      <div className="detail-info">
        {" "}
        <h2>{producto.nombre}</h2>
        <p>{producto.description}</p>
        <p className="detail-price">
          <strong>$ {producto.precio}</strong>
        </p>
        {producto.stock === 0 && (
          <p style={{ color: "red", fontWeight: "bold" }}>Producto sin stock</p>
        )}
        {!addedQty && producto.stock > 0 && (
          <ItemCount stock={producto.stock || 10} initial={1} onAdd={onAdd} />
        )}
        {addedQty > 0 && (
          <div style={{ marginTop: 20 }}>
            <p>Agregaste {addedQty} unidad(es)</p>

            <div className="detail-actions">
              <Link to="/cart">
                <button className="add-cart-btn">Ir al carrito</button>
              </Link>
              <Link to="/">
                <button className="add-cart-btn">Seguir comprando</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
