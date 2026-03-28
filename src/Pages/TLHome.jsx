import "../App.css"
import fundo from "../assets/BibliotecaLG.png"

export default function TLHome(){
    return (
        
                <div 
                    className="container" 
                    style={{ backgroundImage: `url(${fundo})` }}
                >
            <h1>Home</h1>
        </div>
    )
}