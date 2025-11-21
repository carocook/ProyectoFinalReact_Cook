import { useState, useRef, useEffect } from "react";
import "../styles/CartWidget.css";

function CartWidget({ carrito }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="cart-widget" ref={ref}>
      <span className="cart-icon" onClick={() => setOpen(!open)}>
        🛒 {carrito.length}
      </span>

      {open && (
        <div className="cart-dropdown">
          <h4 className="cart-title">Tu carrito</h4>
          {carrito.length === 0 ? (
            <p className="cart-empty">Carrito vacío</p>
          ) : (
            <>
              {carrito.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.img} alt={item.nombre} />
                  <span>
                    {item.nombre} x {item.cantidad}
                  </span>
                  <p>${item.precio}</p>
                </div>
              ))}
              <strong>Total: ${total}</strong>
            </>
          )}
          <button onClick={() => setOpen(false)}>Cerrar</button>
        </div>
      )}
    </div>
  );
}

export default CartWidget;
