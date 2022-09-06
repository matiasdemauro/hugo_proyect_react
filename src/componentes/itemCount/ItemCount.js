import "./itemCount.css";
import React from "react";
import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [conter, setConter] = useState(initial);

  const cresien = () => {
    setConter(conter + 1);
  };

  const decres = () => {
    setConter(conter - 1);
  };
  return (
    <div className="counter">
      <button disabled={conter >= stock} onClick={cresien}>
        +
      </button>
      <span>{conter}</span>
      <button disabled={conter <= 1} onClick={decres}>
        -
      </button>
      <div>
        <button disabled={stock <= 0} onClick={() => onAdd(conter)}>
          Agregar Al Carrito
        </button>
      </div>
    </div>
  );
};
export default ItemCount;
