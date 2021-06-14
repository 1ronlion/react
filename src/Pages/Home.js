import React,{useState,useEffect} from "react"
import Product from "../Components/Product"
import {Row, Col} from 'react-bootstrap'




function Home() {
    
    const [productos,setProductos] = useState([]);

    useEffect(
        ()=>{
            fetch("https://60874e06a3b9c200173b7de9.mockapi.io/product")
            .then(res=>res.json())
            .then(data=>{
                setProductos(data);
            })
        },
        []
    )

        
    return(

      

      
                <Row>
    
            {productos.map(product=><Product data={product} />)}
         
                </Row>

        
      
                
              
    )

        
    


}
export default Home;
