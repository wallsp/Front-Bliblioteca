import fundo from '../assets/BibliotecaLG.png'
import '../App.css'
import { Link } from 'react-router-dom'
import { useState } from "react"
import api from '../services/api'

export default function TLCadastro(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setUserName] = useState("")
    const [typeuser, setTypeuser] = useState("")

    function onSubmit(e){
        e.preventDefault()

        alert("Enviado")

        api.post("/user",{
            email,password,name,typeuser
        })
    }

    return(
        <div className="container" style={{ backgroundImage: `url(${fundo})` }}>

            <form className="login" onSubmit={onSubmit}>

                <h1>BiblioEtec</h1>

                <label>Email</label>
                <input 
                    type="email" placeholder="Digite seu email" required value={email} onChange={(e) => setEmail(e.target.value)}/>

                <label>Senha:</label>
                <input 
                    type="password" placeholder="Digite sua senha" required value={password} onChange={(e) => setPassword(e.target.value)}/> 

                <label>Nome:</label>
                <input 
                    type="text" placeholder="Digite seu nome" required value={name} onChange={(e) => setUserName(e.target.value)}/>

                <label>Usuario:</label>

                <div className="Usuarios">

                    <label className="Opcoes">
                        <input 
                            type="radio" name="tipoUsuario" value="admin" onChange={(e) => setTypeuser(e.target.value)}/>
                        Administrador
                    </label>

                    <label className="Opcoes">
                        <input 
                            type="radio"name="tipoUsuario"value="comum"onChange={(e) => setTypeuser(e.target.value)}/>
                        Comum
                    </label>

                </div>

                <p className="nomes">
                    <Link to="/">Voltar a Pagina De Login?</Link>
                </p>

                <button type="submit">CADASTRAR</button>

            </form>

        </div>
    )
}