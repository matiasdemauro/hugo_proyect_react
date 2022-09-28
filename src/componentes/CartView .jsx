import React from 'react'
import  useCartContext  from "../CartContext"
import { Link } from "react-router-dom";


function CartView () {
    const {cart, removeFromCart, clearCart } = useCartContext()
  

    if (cart.length === 0){

    
  return <>
        <h3>No hay productos en el carrito</h3>
        <Link to="/">Volver a Inicio</Link>
  </>
    }else{
        return <div>{cart.map(itemCart => {
            return <div style={{textAlign:"center", backgroundColor:"yellow"}} key={itemCart.id}>
              <h2>{itemCart.title}</h2>
              <h2>{itemCart.quantity}</h2>
              <h2>${itemCart.quantity * itemCart.precio}</h2>
              <button onClick={()=>removeFromCart(itemCart.id)} style={{ textAlign:"center",color: "green"}}>Borrar</button>
            </div>
        })}
           <button onClick={clearCart} style={{backgroundColor: "yellow"}}>Limpiar Carrito</button>
       </div>    
        }
}

export default CartView 
 