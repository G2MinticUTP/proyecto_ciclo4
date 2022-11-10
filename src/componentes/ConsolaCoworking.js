import React, { Component } from 'react'
import Footer from './Footer';
import Header from './Header';

export default class ConsolaCoworking extends Component {
  render() {
    return (
        <div>
            <Header></Header>
            <div className="títulos">
			<h2>ADMINISTRACIÓN DE ESPACIOS COWORKING</h2>
			<br />
			<a className="boton-crear-espacios" href='..'>CREAR ESPACIO</a>
		</div>
            <table id="tabla">
                <thead>
                    <tr>
                        <th>CÓDIGO</th>
                        <th>TÍTULO</th>
                        <th>DESCRIPCIÓN</th>
                        <th>IMAGEN</th>
                        <th colSpan="3">ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            codigo
                        </td>
                        <td>
                            titulo
                        </td>
                        <td>
                            descripcion
                        </td>
                        <td>
                            <img
                                className="imgCoworking"
                                alt='.'
                            />
                        </td>

                        <td>
                            <a className="nav-link" href='..'><img src="Img/editar.png" width="30" alt='.' /></a>
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
            <Footer></Footer>
        </div>
    )
  }
}