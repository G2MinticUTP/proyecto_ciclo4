import Home from "./componentes/Home";
import InicioSesion from "./componentes/InicioSesion";
import ConsolaCoworking from "./componentes/ConsolaCoworking";
import RegistrarUsuario from "./componentes/RegistrarUsuario";
import CredencialesIncorrectas from './componentes/CredencialesIncorrectas';
import CrearCoworking from "./componentes/CrearCoworking";
import EditarCoworking from "./componentes/EditarCoworking";
import GestionReservas from "./componentes/GestionReservas";
import CrearReserva from "./componentes/CrearReserva";
import EditarReserva from "./componentes/EditarReserva";

import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="InicioSesion" element={<InicioSesion/>}></Route>
        <Route path="ConsolaCoworking" element={<ConsolaCoworking/>}></Route>
        <Route path="RegistrarUsuario" element={<RegistrarUsuario/>}></Route>
        <Route path="CredencialesIncorrectas" element={<CredencialesIncorrectas/>}></Route>
        <Route path="CrearCoworking" element={<CrearCoworking/>}></Route>
        <Route path="EditarCoworking" element={<EditarCoworking/>}></Route>
        <Route path="GestionReservas" element={<GestionReservas/>}></Route>
        <Route path="CrearReserva" element={<CrearReserva/>}></Route>
        <Route path="EditarReserva" element={<EditarReserva/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
