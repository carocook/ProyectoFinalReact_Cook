import React, { useState } from "react";
import "../styles/ItemCount.css";

export default function ItemCount({ stock = 10, initial = 1, onAdd }) {
  const [qty, setQty] = useState(initial);

  const dec = () => setQty((q) => Math.max(1, q - 1));
  const inc = () => setQty((q) => Math.min(stock, q + 1));

  return (
    <div className="item-count">
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <button onClick={dec} className="count-btn">
          -
        </button>
        <span className="count-number">{qty}</span>
        <button onClick={inc} className="count-btn">
          +
        </button>
      </div>
      <button
        className="add-cart-btn"
        onClick={() => onAdd(qty)}
        disabled={stock === 0}
        style={{ marginTop: 8 }}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
