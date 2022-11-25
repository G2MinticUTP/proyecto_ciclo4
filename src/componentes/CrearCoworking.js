import React,{ Fragment } from 'react'
import Header from './Header';
import Footer from './Footer';

const CrearCoworking = () => {

    const enviarDatos = (event) => {
        event.preventDefault()
    }
    return(
        <Fragment>
            <Header></Header>
            <div className="títulos">
                <h1>CREAR ESPACIO COWORKING</h1>
            </div>

            <div className="login-registro">
                <div className="login-screen">

                    <div className="subir-archivo">
                        <form className="row" onSubmit={enviarDatos} >
                            <div>
                                <label className="labelCoworking">Titulo</label>
                                <input type="text" className="form-control" id="id_espacio" placeholder="Escribe un titulo" required />
                            </div>
                            <div className="text-area">
                                <label  className="form-label">Descripción del espacio coworking</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Describa los detalles del espacio coworking a crear" required>
                                </textarea>
                            </div>
                            <div>
                                <label className="labelCoworking">Ruta de imagen</label>
                                <input type="text" className="form-control" id="id_espacio" placeholder="Escribe la ruta de la imagen" required />
                            </div>
                            <div className="botones">
                            <button type="submit" className="btn btn-primary" id="buttonRegistro">Crear</button>
                            </div>
                        </form>
                        <div>
                            <a className="login-link" href="/ConsolaCoworking">Ir al Dashboard</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </Fragment>
    );
}

export default CrearCoworking;