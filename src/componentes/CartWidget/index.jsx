import React from "react";
import IconoCarrito from '../image/icono-cart.png';
import useCartContext from "../../CartContext";


const CartWidget = () =>{
    const {totalProductos} = useCartContext();
    return (
    <>
         <a className="nav-link" href="/"><p className="cantidad"><span>{totalProductos() || "" }</span></p><img src={IconoCarrito} className="carritoNavbar" alt="icono"></img></a>
    </>
    );
}
export default CartWidget
