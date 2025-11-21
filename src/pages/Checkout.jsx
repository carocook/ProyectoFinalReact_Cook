import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";
import "../styles/Checkout.css";

export default function CheckoutPage() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) =>
    setBuyer((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!buyer.name || !buyer.email) {
      alert("Completá nombre y email");
      return;
    }
    if (!cart || cart.length === 0) {
      alert("Carrito vacío");
      return;
    }

    setLoading(true);
    const order = {
      buyer,
      items: cart,
      total: getTotalPrice(),
      createdAt: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(collection(db, "ordenes"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (err) {
      console.error("Error creando orden:", err);
      alert("Error al generar la orden");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="loading-message">Generando orden...</p>;
  if (orderId)
    return (
      <div className="success-message">
        <h2>Compra realizada</h2>
        <p>
          ID de la orden: <b>{orderId}</b>
        </p>
      </div>
    );

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div>
          <label>Nombre</label>
          <input name="name" value={buyer.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input name="email" value={buyer.email} onChange={handleChange} />
        </div>
        <div>
          <label>Teléfono</label>
          <input name="phone" value={buyer.phone} onChange={handleChange} />
        </div>
        <button type="submit" className="confirm-btn" disabled={loading}>
          Confirmar compra
        </button>
      </form>
    </div>
  );
}
