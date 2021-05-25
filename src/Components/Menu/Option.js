import React,{Component} from "react"
import {Link} from "react-router-dom"


    
function Option(props){
    return(
        <Link as={Link} to={props.path}>{props.label}</Link>
    )
}

export default Option;