import fundo from '../assets/BibliotecaLG.png'
import '../App.css'

export default function TLCadastro(){
    return(
        <div className="container" style={{ backgroundImage: `url(${fundo})` }}>

            <div className="login">

                <h1>BiblioEtec</h1>

                <label>Email</label>
                <input type="email" placeholder="Digite seu email" />

                <label>Senha:</label>
                <input type="password" placeholder="Digite sua senha" />

                <label>Nome:</label>
                <input type="text" placeholder="Digite seu nome" />

                <label>Usuario:</label>
                <div className="Usuarios">

                    <label className="Opcoes">
                        <input type="radio" name="tipoUsuario" value="admin" />
                        Administrador
                    </label>

                    <label className="Opcoes">
                        <input type="radio" name="tipoUsuario" value="comum" />
                        Comum
                    </label>

                </div>

                <button>CADASTRAR</button>

            </div>

        </div>
    )
}