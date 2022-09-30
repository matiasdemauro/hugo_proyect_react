
import React, {useState, useEffect}  from "react";
import { useParams } from "react-router";
import producto from "../datos/productos";
import ItemDetail from "../ItemDetail/ItemDetail"
// import { getFirestore, doc, getDoc } from "@firebase/firestore";
 



const viewProducto =(id)=>{
    return new Promise((resolucion)=>{
        setTimeout(() => { 
           const productoAl = producto.find((producto)=>{
               return parseInt(id) ===  producto.id;
           })
           resolucion(productoAl)
        }, 1000);
    });
}

 

const ItemDetailContainer =() =>{
 
    const [producto, setProducto] = useState([]);
const {itemid} = useParams(); 
    useEffect(() =>{
        viewProducto(itemid).then(respuestaPro =>{
            setProducto(respuestaPro);
        })
    }, [itemid]);
  
    
return(
    <>

    <ItemDetail producto={producto}/>
  
    </>
);
}

export default ItemDetailContainer

