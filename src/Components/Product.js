import React,{Component,useState} from "react"
import {Link} from "react-router-dom"




function Product(props){
    const {data} = props
    const {id,price,name,photo,description}=props.data
    const verDetalle = (props.verDetalle!==false?true:false);
    const verDescripcion = (props.verDescripcion!==true?false:true);


    return(
        <div>
           
            <div> <img src= {photo}></img> </div>
            <div> {name}  </div>
            <div> {price} </div>

            {
                verDescripcion && 
                <div> {description} </div>
            }

            
                <button><Link to={"/comprar/"+id}>Comprar</Link></button>

            {
                verDetalle && 
                <button ><Link to={"/product/"+id}>Ver Detalle</Link></button>
            }

    

        
        </div>
    )
}



export default Product;