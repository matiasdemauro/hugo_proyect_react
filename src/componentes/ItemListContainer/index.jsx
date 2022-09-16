import React, { useEffect, useState } from "react";
import Title from "../Title/index";
import ItemCount from "../itemCount/ItemCount";
import Inventario from "../datos/productos"
import ItemList from "../itemList/ItemList";
import {useParams} from "react-router-dom"

const viewProducto =(especieid)=>{
    return new Promise((resolucion)=>{
        setTimeout(() => { 
            if (especieid){
              const filtrando=  Inventario.filter((producto)=>{
               return producto.especie === especieid;
             });
             resolucion(filtrando);
            }else{
             resolucion(Inventario);
            }
        }, 2000);
    });
}

 

const ItemListContainer =() =>{
    const [producto, setProducto] = useState([]);
    const {especieid}= useParams();
 
    useEffect(() =>{
        viewProducto(especieid).then(respuestaPro =>{
            setProducto(respuestaPro);
        })
    }, [especieid]);
    const onAdd=(ele)=>{
        alert(`Compraste esta cantidad: ${ele}`)
    }
return(
    <>
    <Title texto= ""/>
    <ItemList producto={producto}/>
    <ItemCount  initial={1} stock={5} onAdd={onAdd}/>
    </>
);

}
export default ItemListContainer