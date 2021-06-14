import React,{useState,useEffect} from "react"
import Product from "../Components/Product"


function ProductDetail(props) {

    const id = props.match.params.id;
    const [producto,setProducto] = useState({});
 
    useEffect(
        ()=>{
            fetch("https://60874e06a3b9c200173b7de9.mockapi.io/product/"+id)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setProducto(data);
            })
        },
        []
    )
    
   
        return(
        <div>
            <Product id={producto.id} data={producto} verTarjeta={false} verDetalle={false} verDescripcion={true}/>
        </div>
        
        )
    }


export default ProductDetail;