import React, {Fragment, useState} from 'react';
// import {useNavigate} from 'react-router-dom';
import './stilos.css';
import Header from './Header';
import Footer from './Footer';

const Registrarse = () => {
  const [datos, setDatos] = useState({
    name: '',
    correo: '',
    password: '',
    telefono: ''
  })

  const handleInputChange = (event) => {
    //console.log(event.target.name)
    //console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }

  const enviarDatos = (event) => {
    event.preventDefault()
    // console.log('enviando datos...' + datos.usuario + ' ' + datos.password)
    // if (datos.usuario === 'eduar' && datos.password === 'eduar12345') {
    //   //console.log("Usuario correcto");
    //   navigate("/ConsolaCoworking");
    // }
    // else {
    //   //console.log("Usuario incorrecto");
    //   navigate("/credencialesIncorrectas");
    // }
  }
//   const navigate = useNavigate();

    return (
        <Fragment>
            <Header></Header>
            <div className="títulos">
                <h1>REGISTRO DE USUARIO</h1>
            </div>

            <div className="login-registro">
                <div className="login-screen">
                    <div className="app-title">
                        <img src="Img/BotonLogin.png" width="60px" alt='..' />
                    </div>

                    <div className="login-form">
                        <form className="row" onSubmit={enviarDatos}>
                            <div className="control-group">
                                <input
                                    type="text"
                                    className="login-field"
                                    placeholder="Nombre Completo"
                                    id="name"
                                    name="name"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="control-group">
                                <input
                                    type="adress"
                                    className="login-field"
                                    placeholder="Correo electrónico"
                                    id="correo"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="control-group">
                                <input
                                    type="password"
                                    className="login-field"
                                    placeholder="Crear Contraseña"
                                    id="pass"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="control-group">
                                <input
                                    type="password"
                                    className="login-field"
                                    placeholder="Confirmar Contraseña"
                                    id="pass2"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="control-group">
                                <input
                                    type="text"
                                    className="login-field"
                                    placeholder="Teléfono de Contacto"
                                    id="telefono"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="control-group">

                                <select className="select-perfil">
                                    <option value="1">Usuario</option>
                                    <option value="3">Administrador</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary" id="buttonRegistro">Registrarse</button>

                        </form>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </Fragment>
    );
}
 
export default Registrarse;