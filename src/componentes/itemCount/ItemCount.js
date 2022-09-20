import "./itemCount.css";
import React from "react";
import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const cresien = () => {
    setCounter(counter + 1);
  };

  const decres = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="counter">
      <button disabled={counter >= stock} onClick={cresien}>
        +
      </button>
      <span>{counter}</span>
      <button disabled={counter <= 1} onClick={decres}>
        -
      </button>
      <div>
        <button onClick={() => onAdd(counter)}>Agregar Al Carrito</button>
      </div>
    </div>
  );
};
export default ItemCount;
