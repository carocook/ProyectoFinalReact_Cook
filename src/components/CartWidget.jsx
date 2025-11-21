import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/CartWidget.css";

export default function CartWidget() {
  const { getTotalItems } = useCart();
  const total = getTotalItems();
  return (
    <Link to="/cart" className="cart-link cart-widget">
      <span className="cart-icon">🛒</span>
      <span className="cart-count">{total}</span>
    </Link>
  );
}
