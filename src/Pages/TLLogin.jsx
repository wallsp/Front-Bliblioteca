import { Link, useNavigate } from "react-router-dom"
import fundo from "../assets/BibliotecaLG.png"
import "../App.css"
import api from "../services/api"
import { toast } from "react-toastify"
import { useState } from "react"

export default function TLLogin(){

    const navigateTo = useNavigate()

    const [email, setEmail] = useState("wallace@gmail.com")
    const [password, setPassword] = useState("123456")

    async function onSubmit(e){
        e.preventDefault()

        try {
            const { data } = await api.post("/login", {
                email,
                password
            })
            
            localStorage.setItem("token", data.token)

            toast.success("Login realizado com sucesso!", {
                position: "top-left",
                autoClose: 2000,
            })

            setTimeout(() => {
                navigateTo("/home")
            }, 2000)

        } catch(err) {
            console.log(err)

            toast.error(
                err.response?.data || "Erro ao fazer login",
                {
                    position: "top-left",
                    autoClose: 5000,
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

                <label>Login:</label>
                <input 
                    type="email"
                    placeholder="Insira Seu Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label>Senha:</label>
                <input 
                    type="password"
                    placeholder="Insira Sua Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <p className="nomes">
                    Esqueceu a Senha? <Link to="/">Clique Aqui</Link>
                </p>

                <p className="nomes">
                    Não Tem Conta? <Link to="/cadastro">Cadastrar-se</Link>
                </p>

                <button type="submit">ENTRAR</button>

            </form>

        </div>
    )
}