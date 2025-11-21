import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/Cart.css";

export default function CartPage() {
  const { cart, removeItem, clearCart, getTotalPrice, addItem } = useCart();

  if (!cart || cart.length === 0) {
    return (
      <div className="cart-page">
        <h2>Carrito vacío</h2>
        <Link
          to="/"
          style={{ display: "block", textAlign: "center", marginTop: "2rem" }}
        >
          <button className="checkout-btn">Seguir comprando</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      {" "}
      <h2>Carrito</h2>
      <ul className="cart-list">
        {" "}
        {cart.map((p) => (
          <li key={p.id} className="cart-item-row">
            {" "}
            <div className="cart-item-info">
              {" "}
              <img src={p.img || "/placeholder.png"} alt={p.nombre} />
              <span className="item-name">{p.nombre}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <button
                  onClick={() => removeItem(p.id, 1)}
                  className="count-btn"
                  disabled={p.qty <= 1}
                >
                  -
                </button>
                <span className="count-number">{p.qty}</span>{" "}
                <button onClick={() => addItem(p, 1)} className="count-btn">
                  +
                </button>
              </div>

              <span style={{ minWidth: 60, marginLeft: "2rem" }}>
                ${p.qty * (p.price ?? p.priceKey ?? p.priceFormatted)}
              </span>

              <button
                onClick={() => removeItem(p.id)}
                className="remove-item-btn"
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-totals">
        {" "}
        <h3>Total: $ {getTotalPrice()}</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "colum",
            alignItems: "flex-end",
            marginTop: "1rem",
          }}
        >
          <button onClick={clearCart} className="clear-cart-btn">
            {" "}
            Vaciar carrito
          </button>
          <Link to="/checkout">
            <button className="checkout-btn">Finalizar compra</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
