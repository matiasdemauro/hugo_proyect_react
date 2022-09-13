import React, { useEffect, useState } from "react";
// import Title from "../Title/index";
import ItemCount from "../itemCount/ItemCount";
import Inventario from "../datos/productos"
import ItemList from "../itemList/ItemList";

const viewProducto =()=>{
    return new Promise((resolucion)=>{
        setTimeout(() => { 
            resolucion(Inventario);
        }, 2000);
    });
}

 

const ItemListContainer =() =>{
    const [producto, setProducto] = useState([]);

    useEffect(() =>{
        viewProducto().then(respuestaPro =>{
            setProducto(respuestaPro);
        })
    }, []);
    const onAdd=(ele)=>{
        alert(`Compraste esta cantidad: ${ele}`)
    }
return(
    <>
    {/* <Title texto= "practicando"/> */}
    <ItemList producto={producto}/>
    <ItemCount  initial={1} stock={5} onAdd={onAdd}/>
    </>
);

}
export default ItemListContainer