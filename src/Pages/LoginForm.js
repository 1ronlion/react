import React,{useState, useContext} from "react"
import firebase from "../Config/Firebase"
import {useHistory} from "react-router-dom"
import EcommerceContext from "../Context/EcommerceContext"
import FormGroup from "../Components/FormGroup"
import AlertCustom from "../Components/AlertCustom"
import {Button} from 'react-bootstrap'


function LoginForm(){
    const Context = useContext (EcommerceContext)
    const [alert,setAlert] = useState({variant:"",text:""})
    const [form,setForm] = useState({email:'',password:''})
    const history = useHistory ()
    const handleSubmit = (event)=>{
        
        event.preventDefault()
    

    firebase.auth.signInWithEmailAndPassword(form.email, form.password)
    .then(data =>{
        console.log("Login Ok", data)
        Context.loginUser()
        history.push("/")
        })

        .catch(error=>{
            console.log("Error", error)
            setAlert({variant:"danger",text:"Usuario o contraseña incorrecta"})
        })

    }
    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value
        setForm({...form,[name]:value})
    }
    
    return(
   
        <form onSubmit={handleSubmit}>

        <h1 style={{marginTop:-20, marginBottom:30}}>Ingresar</h1>
        
        <FormGroup label="Email" name="email" type="email" placeholder="Ingrese su email" value={form.email} change={handleChange} />
        <FormGroup label="Contraseña" name="password" type="password" placeholder="Ingrese su contraseña" value={form.password} change={handleChange} />
   
        <Button type="submit" variant="secondary" style={{marginTop:12}}>Ingresar</Button>

        <AlertCustom variant={alert.variant} text={alert.text} />

        </form>
  
    )
    
}
export default LoginForm;