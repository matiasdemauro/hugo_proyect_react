import React from "react";
import Title from "../Title/index";
import ItemCount from "../itemCount/ItemCount";

const ItemListContainer =() =>{
    const onAdd=(ele)=>{
        alert(`Compraste esta cantidad: ${ele}`)
    }
return(
    <>
    <Title texto= "practicando"/>
    <ItemCount  initial={1} stock={5} onAdd={onAdd}/>
    </>
);

}
export default ItemListContainer