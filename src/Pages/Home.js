import React,{useState,useEffect} from "react"
import Product from "../Components/Product"



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
        <div>
           

            {productos.map(product=><Product data={product} />)}

        </div>
    )

        
    


}
export default Home;
