import React,{useState} from "react"
import firebase from "../Config/Firebase"
import {Button} from 'react-bootstrap'
import AlertCustom from "../Components/AlertCustom"
import FormGroup from "../Components/FormGroup"

function RegisterForm(){
    const [form,setForm] = useState({nombre:'',apellido:'',email:'',password:''})
    const [alert,setAlert] = useState({variant:"",text:""})
    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log(form)

        firebase.auth.createUserWithEmailAndPassword(form.email, form.password)
        .then(data =>{
            console.log("registro", data.user.uid)
            firebase.db.collection("usuarios").add({
                nombre: form.nombre,
                apellido: form.apellido,
                email: form.email,
                userId: data.user.uid,
            })
            .then(data=>{
                console.log(data);
                setAlert({variant:"success",text:"Registro Exitoso!"})
            })
            .catch(error=>{
                console.log("error add", error)
                setAlert({variant:"danger",text:"Ha ocurrido un error"})
                
            })
        })
        .catch(error =>{
            console.log("error", error)
            setAlert({variant:"danger",text:"Ha ocurrido un error"})
        })
    }
    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value
        console.log(name,value)
        setForm({...form,[name]:value})
    }
    
    return(

        

  
        <form onSubmit={handleSubmit}>

            <h1 style={{marginTop:-20, marginBottom:30}}>Formulario de registro</h1>

                <FormGroup label="Nombre" name="nombre" type="text" placeholder="Ingrese su nombre" value={form.nombre} change={handleChange} />
                <FormGroup label="Apellido" name="apellido" type="text" placeholder="Ingrese su apellido" value={form.apellido} change={handleChange} />
                <FormGroup label="Email" name="email" type="email" placeholder="Ingrese su email" value={form.email} change={handleChange} />
                <FormGroup label="Contraseña" name="password" type="password" placeholder="Ingrese su contraseña" value={form.password} change={handleChange} />

            <Button variant="secondary" type="submit" style={{marginTop:12}}>Registrarse</Button>

            <AlertCustom variant={alert.variant} text={alert.text} />
     
          
        </form>
   


    )
    
}
export default RegisterForm;