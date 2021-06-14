import React,{Component,useState} from "react"
import {Link} from "react-router-dom"
import {Card, Button, Col} from 'react-bootstrap'
import EcommerceContext from "../Context/EcommerceContext"



function Product(props){
    const {data} = props
    const {id,price,name,photo,description}=props.data
    const verDetalle = (props.verDetalle!==false?true:false);
    const verDescripcion = (props.verDescripcion!==true?false:true);
    const verTarjeta = (props.verTarjeta!==false?true:false);
    const [mensaje,setMensaje]=useState("")

    const comprar = ()=>{
      console.log("dasds")
      if(data.stock-1==0){
          setMensaje (alert("No hay stock"))
      }else{
          setMensaje (alert("Gracias por su compra"))
      }
  }

    return(
      <EcommerceContext.Consumer>
        {
        context=>
        
        <Col xs lg="3">
  { verTarjeta &&
           <Card style= {{marginBottom: 64}}>
  <Card.Img variant="top" src= {photo} style={{height: 320}}  />
  <Card.Body style= {{height: 180}}>
    <Card.Title>{name}</Card.Title>
  
         
  
    <Card.Text style={{marginBottom:24}}>
    {price}
    </Card.Text>
    {
                            context.userLogin &&
                            <Button variant="secondary" style={{marginRight:12}} onClick={comprar}>Comprar</Button>
                        }
    {
                verDetalle && 
                <Button variant="secondary" style={{paddingLeft:5, paddingRight:5}}><Link style={{color:"#FFFFFF", textDecoration:"none"}} to={"/product/"+id}>Ver Detalle </Link></Button>
            }
  </Card.Body>
  </Card>
}

{mensaje}
   
{
  verDescripcion && 
  
  
  <Card style= {{marginLeft: 120, marginBottom: 64, height: 1450, width: 800}}>
  <Card.Body>
    <Card.Title style={{fontWeight: 900, fontSize: 32}} >{name}</Card.Title>
    <Card.Text style={{marginBottom:24, fontSize: 18}}>
    {description}
    </Card.Text>
    <Card.Img variant="top" src= {photo} />
    <Card.Text style={{fontSize:48, paddingBottom: 40, marginTop:30, marginLeft: 10}}>
   
    {
                            context.userLogin &&
                            <Button variant="secondary" style={{marginTop: -7, fontSize:32}} onClick={comprar}>Comprar</Button>
                        }
    {price}
    </Card.Text>
  </Card.Body>
  </Card>
}

</Col>



}
</EcommerceContext.Consumer>
        )
}



export default Product;