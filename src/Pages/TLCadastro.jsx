import fundo from '../assets/BibliotecaLG.png'
import '../App.css'

export default function TLCadastro(){
    return(
        <div className="container" style={{ backgroundImage: `url(${fundo})` }}>

            <div className="login-box">

                <h1>BiblioEtec</h1>

                <label>Email</label>
                <input type="email" placeholder="Digite seu email" />

                <label>Senha:</label>
                <input type="password" placeholder="Digite sua senha" />

                <label>Nome:</label>
                <input type="text" placeholder="Digite seu nome" />

                <label>Usuario:</label>
                <input type="text" placeholder="Digite seu usuário" />

                <button>Cadastrar</button>

            </div>

        </div>
    )
}