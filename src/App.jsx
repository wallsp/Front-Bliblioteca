import { Link } from 'react-router-dom'
import './App.css'
import fundo from './assets/BibliotecaLG.png'

export default function App(){
  return(
    <div className="container" style={{ backgroundImage: `url(${fundo})` }}>

      <div className="login-box">

        <h1>BiblioEtec</h1>

        <label>Login:</label>
        <input type="text" placeholder='Insira Seu Email' />

        <label>PassWord:</label>
        <input type="password" placeholder='Insira Sua Senha' />

        <p className="forgot">
          Esqueceu a Senha? <span>Clique Aqui</span>
        </p>
        <p className="forgot">
        Não Tem Conta? <Link to="/cadastro">Cadastrar-se</Link>
        </p>

        <button>ENTRAR</button>

      </div>

    </div>
  )
}