import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

const GestionReservas = () => {
    return(
        <Fragment>
            <Header></Header>
            <div className="títulos">
                <h2>GESTION DE RESERVAS</h2>
                <br />
                <a className="login-link" href="/CrearReserva">RESERVAR</a>
            </div>

            <div>
                <table id="tabla">
                    <thead>
                        <tr>
                            <th>ESPACIO RESERVADO</th>
                            <th>FECHA DE LA RESERVA</th>
                            <th>CANTIDAD DE PERSONAS</th>
                            <th>HORA INICIAL DE LA RESERVA</th>
                            <th>HORA FINAL DE LA RESERVA</th>
                            <th>PERSONA QUE RESERVO</th>
                            <th>ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                espacio
                            </td>
                            <td>
                                fecha de la reserva
                            </td>
                            <td>
                                hora inicial
                            </td>
                            <td>
                                hora final
                            </td>
                            <td>
                                persona
                            </td>
                            <td>
                                <a className="nav-link" href='/EditarReserva'><img src="Img/editar.png" width="30" alt='.' /></a>
                            </td>
                            <td>
                                <form method="post">
                                    <button className="eliminar">
                                        <img
                                            className="img"
                                            src="Img/eliminar.png"
                                            width="30"
                                            alt='.'
                                        />
                                    </button>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer></Footer>
        </Fragment>
    );
}

export default GestionReservas;