import React, {useState, useEffect}  from "react";
import producto from "../datos/productos";

import ItemDetail from "../ItemDetail/ItemDetail";

const viewProducto =()=>{
    return new Promise((resolucion)=>{
        setTimeout(() => { 
            resolucion(producto);
        }, 2000);
    });
}

 

const ItemDetailContainer =() =>{
    const [producto, setProducto] = useState([]);

    useEffect(() =>{
        viewProducto().then(respuestaPro =>{
            setProducto(respuestaPro[0]);
        })
    }, []);
  
    
return(
    <>

    <ItemDetail producto={producto}/>
  
    </>
);
}

export default ItemDetailContainer