import React,{Component} from "react"
import {Link} from "react-router-dom"
import Option from "./Option"
import EcommerceContext from "../../Context/EcommerceContext"
function Menu(){
    
    
    return(
        <EcommerceContext.Consumer>
            {
                context=>
                <div>

        
                                {
                                    context.userLogin &&
                                    <>
                                    <Option path="/" label="Inicio"/> 
                                    <Link  onClick={()=>context.logoutUser(false)}>Salir</Link> 
                                    </>
                                }
                                {
                                    !context.userLogin &&
                                    <>
                                    <Option path="/register" label="Registro"/>  
                                    <Option path="/login" label="Ingresar"/>    
                                    </>
                                }
                            
                                                        
                          
                </div>
            }
            
        </EcommerceContext.Consumer>
    )
    
}
export default Menu;