import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

const CrearReserva = () => {
    const enviarDatos = (event) => {
        event.preventDefault()
    }
    return(
        <Fragment>
            <Header></Header>
            <div className="títulos">
                <h1>CREAR RESERVA</h1>
            </div>

            <div className="login-registro">
                <div className="login-screen">
                    <div className="app-title">
                        <img src="Img/BotonLogin.png" width="60px" alt='..' />
                    </div>

                    <div className="login-form">
                        <form className="row" onSubmit={enviarDatos}>
                            <div className="control-group">
                                <input type="text" className="login-field" placeholder="Nombre Completo" id="login-name" required />
                                <label className="login-field-icon fui-user"></label>
                            </div>

                            <div className="control-group">
                                <input type="text" className="login-field" placeholder="Correo electrónico"
                                    id="login-adress" required />
                                <label className="login-field-icon fui-lock"></label>
                            </div>

                            <div className="control-group">
                                <input type="text" className="login-field" placeholder="Teléfono de Contacto"
                                    id="login-pass" required />
                                <label className="login-field-icon fui-lock"></label>
                            </div>

                            <div className="control-group">

                                <input type="text" className="login-field" placeholder="Aqui va el titulo del espacio" id="login-name" required />
                            </div>

                            <div className="control-group">
                                <input type="text" className="login-field" placeholder="Cantidad de personas" id="login-name" required />
                            </div>

                            <div className="control-group">
                                <input type="time" className="login-field" placeholder="Tiempo de reserva" id="login-name" required />
                            </div>
                            <div className="control-group">
                                <input type="time" className="login-field" placeholder="Tiempo de reserva" id="login-name" required />
                            </div>

                            <div className="calendario">
                                <input type="date" id="start" name="trip-start" required />
                            </div>

                            <div className="botones">
                                <button type="submit" className="btn btn-primary" id="buttonRegistro">Reservar</button>
                            </div>

                        </form>
                        <div>
                            <a className="login-link" href="/GestionReservas">Ir al Dashboard</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </Fragment>
    );
}
export default CrearReserva;