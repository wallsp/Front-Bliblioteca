import { BrowserRouter, Routes, Route } from "react-router-dom"
import TLLogin from "./Pages/TLLogin"
import TLCadastro from "./Pages/TLCadastro"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<TLLogin />} />

        <Route path="/cadastro" element={<TLCadastro />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App