import './App.css'
import fundo from './assets/BibliotecaLG.png'

export default function App(){
  return(
    <div className="container" style={{ backgroundImage: `url(${fundo})` }}>

      <div className="login-box">

        <h1>BiblioEtec</h1>

        <label>Login:</label>
        <input type="text" placeholder='Insira seu email'/>

        <label>PassWord:</label>
        <input type="password" placeholder='Insira sua senha' />

        <p className="forgot">
          Esqueceu a Senha? <span>Clique Aqui</span>
        </p>
        <p className="forgot">
          Não Tem Conta? <span>Cadastrar-se</span>
        </p>

        <button>ENTRAR</button>

      </div>

    </div>
  )
}