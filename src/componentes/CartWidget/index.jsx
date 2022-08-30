import React from "react";
import IconoCarrito from '../image/icono-cart.png';

const CartWidget = () =>{
    return (
    <>
         <a className="nav-link" href="/"><p className="cantidad">34</p><img src={IconoCarrito} className="carritoNavbar" alt="icono"></img></a>
    </>
    );
}
export default CartWidget
