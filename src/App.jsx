import { BrowserRouter, Routes, Route } from "react-router-dom"
import TLLogin from "./Pages/TLLogin"
import TLCadastro from "./Pages/TLCadastro"
import TLComum from "./Pages/TLComum"
import TLAdmin from "./Pages/TLAdmin"
import TLHome from "./Pages/TLHome"
import { ToastContainer } from "react-toastify"
import ProtectedRouter from "./Helpers/ProtectedRouters"


function App() {
  return (
    
    <><BrowserRouter>

      <Routes>

        <Route path="/" element={<TLLogin />} />

        <Route path="/cadastro" element={<TLCadastro />} />
        <Route 
          path="/home" element={
            <ProtectedRouter>
              <TLHome />
            </ProtectedRouter>
          } 
        />
        
        <Route path="/Comum" element={<TLComum />}/>

                <Route 
          path="/admin" element={
            <ProtectedRouter roles={["admin"]}>
              <TLAdmin />
            </ProtectedRouter>
          } 
        />
        

      </Routes>


    <ToastContainer />
    </BrowserRouter>
    </>
  )
}

export default App