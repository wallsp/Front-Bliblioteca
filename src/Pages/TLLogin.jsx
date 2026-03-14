import { Link } from "react-router-dom"
import fundo from "../assets/BibliotecaLG.png"
import "../App.css"


export default function TLLogin(){
  return(
    <div className="container" style={{ backgroundImage: `url(${fundo})` }}>

      <div className="login">

        <h1>BiblioEtec</h1>

        <label>Login:</label>
        <input type="text" placeholder="Insira Seu Email" />

        <label>PassWord:</label>
        <input type="password" placeholder="Insira Sua Senha" />

        <p className="nomes">
          Esqueceu a Senha? <Link to="/">Clique Aqui</Link>
        </p>

        <p className="nomes">
          Não Tem Conta? <Link to="/cadastro">Cadastrar-se</Link>
        </p>

        <button>ENTRAR</button>

      </div>

    </div>
  )
}