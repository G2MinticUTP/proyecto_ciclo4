import React, {Fragment, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './stilos.css';
import Header from './Header';
import Footer from './Footer';

const InicioSesion = () => {
  const [datos, setDatos] = useState({
    usuario: '',
    password: ''
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
    if (datos.usuario === 'eduar' && datos.password === 'eduar12345') {
      //console.log("Usuario correcto");
      navigate("/ConsolaCoworking");
    }
    else {
      //console.log("Usuario incorrecto");
      navigate("/credencialesIncorrectas");
    }
  }
  const navigate = useNavigate();

    return (
        <Fragment>
            <Header></Header>
            <div className="títulos">
                <h1>INICIO DE SESIÓN</h1>
            </div>

            <div className="login">
                <div className="login-screen">
                    <div className="app-title">
                        <img src="Img/BotonLogin.png" width="60px" alt="." />
                    </div>

                    <div className="login-form">
                        <form className="row" onSubmit={enviarDatos}>
                            <div className="control-group">
                                <input
                                    type="text"
                                    className="login-field"
                                    placeholder="Nombre de Usuario"
                                    id="login-name"
                                    onChange={handleInputChange}
                                    name="usuario"
                                />
                                <label
                                    className="login-field-icon fui-user"
                                ></label>
                            </div>

                            <div className="control-group">
                                <input
                                    type="password"
                                    className="login-field"
                                    placeholder="Contraseña"
                                    id="login-pass"
                                    onChange={handleInputChange}
                                    name="password"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary" id="button">Iniciar Sesion</button>
                        </form>
                        <a className="login-link" href="/RegistrarUsuario">¿Olvidaste tu contraseña?</a>
                        <a className="login-link" href="/RegistrarUsuario">Registrarse</a>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </Fragment>
    );
}
 
export default InicioSesion;
