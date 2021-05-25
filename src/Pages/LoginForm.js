import React,{useState, useContext} from "react"
import firebase from "../Config/Firebase"
import {useHistory} from "react-router-dom"
import EcommerceContext from "../Context/EcommerceContext"

function LoginForm(){
    const Context = useContext (EcommerceContext)
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
        })

    }
    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value
        setForm({...form,[name]:value})
    }
    
    return(
        /* */
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange}></input>
            </div>
            <div>
                <label>Contraseña</label>
                <input type="password" name="password" value={form.password} onChange={handleChange}></input>
            </div>
            <button type="submit">Ingresar</button>
        </form>
    )
    
}
export default LoginForm;