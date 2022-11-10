import InicioSesion from "./componentes/InicioSesion";
import ConsolaCoworking from "./componentes/ConsolaCoworking";
import RegistrarUsuario from "./componentes/RegistrarUsuario";
import CredencialesIncorrectas from './componentes/CredencialesIncorrectas.js';

import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicioSesion/>}></Route>
        <Route path="ConsolaCoworking" element={<ConsolaCoworking/>}></Route>
        <Route path="RegistrarUsuario" element={<RegistrarUsuario/>}></Route>
        <Route path="CredencialesIncorrectas" element={<CredencialesIncorrectas/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
