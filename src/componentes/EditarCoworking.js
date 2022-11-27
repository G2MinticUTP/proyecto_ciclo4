import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

const EditarCoworking = () => {

    const enviarDatos = (event) => {
        event.preventDefault()
    }
    return(
        <Fragment>
            <Header></Header>
            <div className="títulos">
                <h1>EDITAR ESPACIO COWORKING</h1>
            </div>

            <div className="login-registro">
                <div className="login-screen">

                    <div className="subir-archivo">
                        <form onSubmit={enviarDatos}>
                            <div className="text-area">
                                <label className="tituloCoworking">Titulo</label>
                                <input type="text" className="form-control" id="id_espacio" placeholder="Escribe un titulo" required />
                            </div>

                            <div className="text-area">
                                <label className="form-label">Descripción del espacio coworking
                                </label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required>

                                </textarea>
                            </div>

                            <div>
                                <label className="labelCoworking">Ruta de imagen</label>
                                <input type="text" className="form-control" id="id_espacio" placeholder="Escribe la ruta de la imagen" required />
                            </div>

                            <div className="botones">
                                <button type="submit" className="btn btn-primary" id="buttonRegistro">Editar</button>
                            </div>
                        </form>
                        <a className="login-link" href="/ConsolaCoworking">Ir al Dashboard</a>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </Fragment>

    );
}

export default EditarCoworking;