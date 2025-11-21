import { useState } from "react";
import "../styles/ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const incrementar = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrementar = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="item-count">
      <button onClick={decrementar} className="count-btn">
        -
      </button>
      <span className="count-number">{count}</span>
      <button onClick={incrementar} className="count-btn">
        +
      </button>
      <button className="add-cart-btn" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
