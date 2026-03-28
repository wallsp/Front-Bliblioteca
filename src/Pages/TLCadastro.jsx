import fundo from '../assets/BibliotecaLG.png'
import '../App.css'
import { Link } from 'react-router-dom'
import { useState } from "react"
import api from '../services/api'
import { toast } from 'react-toastify'

export default function TLCadastro(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setUserName] = useState("")
    const [typeUser, setTypeUser] = useState("")

    async function onSubmit(e){
        e.preventDefault()

        if(!typeUser){
            toast.warn("Selecione o tipo de usuário!")
            return
        }

        try {
            const response = await api.post("/user", {
                email,password,name,typeUser
            })

            setEmail("")
            setPassword("")
            setUserName("")
            setTypeUser("")

            toast.success(response.data || "Usuário cadastrado com sucesso!", {
                position: "top-left",
                autoClose: 5000,
                theme: "light",
            })

        } catch(err) {
            console.log(err)

            toast.error(
                err.response?.data || "Erro ao cadastrar usuário",
                {
                    position: "top-left",
                    autoClose: 5000,
                    theme: "light",
                }
            )
        }
    }

    return(
        <div 
            className="container" 
            style={{ backgroundImage: `url(${fundo})` }}
        >

            <form className="login" onSubmit={onSubmit}>

                <h1>BiblioEtec</h1>

                <label>Email</label>
                <input 
                    type="email" placeholder="Digite seu email" required value={email} onChange={(e) => setEmail(e.target.value)}
                />

                <label>Senha:</label>
                <input 
                    type="password" placeholder="Digite sua senha" required value={password} onChange={(e) => setPassword(e.target.value)}
                /> 

                <label>Nome:</label>
                <input 
                    type="text" placeholder="Digite seu nome" required value={name} onChange={(e) => setUserName(e.target.value)}
                />

                <label>Usuário:</label>

                <div className="Usuarios">

                    <label className="Opcoes">
                        <input 
                            type="radio"
                            name="tipoUsuario"
                            value="admin"
                            checked={typeUser === "admin"}
                            onChange={(e) => setTypeUser(e.target.value)}
                        />
                        Administrador
                    </label>

                    <label className="Opcoes">
                        <input 
                            type="radio"
                            name="tipoUsuario"
                            value="comum"
                            checked={typeUser === "comum"}
                            onChange={(e) => setTypeUser(e.target.value)}
                        />
                        Comum
                    </label>

                </div>

                <p className="nomes">
                    <Link to="/">Voltar a Página de Login?</Link>
                </p>

                <button type="submit">CADASTRAR</button>

            </form>

        </div>
    )
}