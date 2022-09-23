import { createContext, useState } from "react";
import { useContext } from "react";
// import producto from "./componentes/datos/productos";
// import producto from "./componentes/datos/productos";



const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) =>{
    const [cart,setCart] = useState([]);


       const addToCart = (item, cant) => {
         let newCart;
         let producto= cart.find(producto => producto.id === item.id);
         if(producto) {
             producto.cant += cant;
             newCart= [...cart];
         } else {
             producto= {...item, cant: cant};
             newCart =[...cart,producto];
         }
         setCart(newCart)

       }

   
   return (
        <CartContext.Provider value={{ cart,  addToCart  }}>
         {children}
        </CartContext.Provider>
    )
   }

export default useCartContext