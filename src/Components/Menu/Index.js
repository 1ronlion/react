import React,{Component} from "react"
import { Nav, Navbar } from 'react-bootstrap';
import {Link} from "react-router-dom"
import Option from "./Option"
import EcommerceContext from "../../Context/EcommerceContext"
import Logo from "../../logo.png"





function Menu(){
    
    
    return(
        <EcommerceContext.Consumer>
            {
                context=>
            

<Navbar sticky="top"expand="lg" style= {{background: "#f5f5f5"}}>

<img src={Logo} style={{width:200, marginTop: 0}}/>



    <Nav className="ml-auto">
               {
                                    context.userLogin &&
                                    <>
                                    <Option path="/" label="Inicio"/> 
                                    <Nav.Link  onClick={()=>context.logoutUser(false)}>Salir</Nav.Link> 
                                    </>
                                }
      

                  
                                {
                                    !context.userLogin &&
                                    <>
                                    <Option path="/" label="Inicio"/> 
                                    <Option path="/register" label="Registro"/>  
                                    <Option path="/login" label="Ingresar"/>    
                                    </>
                                }
                            

                            
                         
    </Nav>
    

    </Navbar> 
      
            }

            
        </EcommerceContext.Consumer>
    )
    
}
export default Menu;