import React, { useState } from "react";
import ItemCount from "../itemCount/ItemCount";

const ItemDetail =({producto})=>{
const [aCart, setaCart] = useState(false);

  const onAdd=()=>{
    setaCart(true)
}
  return(
    <section >
      <div className="container">
    <div className="row">
    <div className="col-12 col-sm-4 text-center d-flex container-fluid">
    <div className="card">
        <img src={producto.imagen} className="card-img-top"  alt="img__card"/>
        <div className="card-body">
          <h5 className="card-title">
          {producto.title}
          </h5>
          <p className="card-text-50 descripcion">{producto.descripcion}</p>
          <p className="card-text">$ <span>{producto.precio}</span></p>
          {aCart? 
           <button className="botonVer">Ver Carrito</button>
         :
          <ItemCount onAdd={onAdd} initial={1} stock={producto.stock}/>
         }
        </div>
      </div>
    </div>
  </div>
</div>
</section>

  );

}
export default ItemDetail