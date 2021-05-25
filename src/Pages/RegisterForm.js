import React,{useState} from "react"
import firebase from "../Config/Firebase"

function RegisterForm(){
    const [form,setForm] = useState({nombre:'',apellido:'',email:'',password:''})
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
            })
            .catch(error=>{
                console.log("error add", error)
            })
        })
        .catch(error =>{
            console.log("error", error)
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
            <div>
                <label>Nombre</label>
                <input type="text" name="nombre" value={form.nombre} onChange={handleChange}></input>
            </div>
            <div>
                <label>Apellido</label>
                <input type="text" name="apellido" value={form.apellido} onChange={handleChange}></input>
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange}></input>
            </div>
            <div>
                <label>Contraseña</label>
                <input type="password" name="password" value={form.password} onChange={handleChange}></input>
            </div>
            <button type="submit">Registrarse</button>
        </form>


    )
    
}
export default RegisterForm;