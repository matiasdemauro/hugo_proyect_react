import React from "react"
import Item from "../item/Item"



const ItemList = ({producto = []}) =>{
    return(
        <div className="row">
        <div className="col-12 col-sm-4 text-center d-flex">
       
              {producto.map(thisproducto =>{
                  return(
                      <Item producto={thisproducto} key={thisproducto.id}/>
                  )
              }) }
        </div>
      </div>
    )
}
export default ItemList