import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

const EditarReserva = () =>{
    return(
        <Fragment>
            <Header></Header>

            <div className="títulos">
                <h1>MODIFICAR RESERVA</h1>
            </div>

			<div className="login-registro">
				<div className="login-screen">
					<div className="app-title">
						<img src="/Img/BotonLogin.png" width="60px" alt=".." />
					</div>

					<div className="login-form">
						<form >
							<div className="control-group">
								<input type="text" className="login-field" placeholder="Nombre Completo" id="login-name" />
								<label className="login-field-icon fui-user"></label>
							</div>

							<div className="control-group">
								<input type="text" className="login-field" placeholder="Correo electrónico"
									id="login-adress" />
								<label className="login-field-icon fui-lock"></label>
							</div>

							<div className="control-group">
								<input type="text" className="login-field" placeholder="Teléfono de Contacto"
									id="login-pass" />
								<label className="login-field-icon fui-lock"></label>
							</div>

							<div className="control-group">

								<input type="text" className="login-field" placeholder="Aqui va el titulo del espacio" id="login-name" />
							</div>

							<div className="control-group">
								<input type="text" className="login-field" placeholder="Cantidad de personas" id="login-name" />
							</div>

							<div className="control-group">
								<input type="time" className="login-field" placeholder="Tiempo de reserva" id="login-name" />
							</div>
							<div className="control-group">
								<input type="time" className="login-field" placeholder="Tiempo de reserva" id="login-name" />
							</div>

							<div className="calendario">
								<input type="date" id="start" name="trip-start" />
							</div>

							<div>
								<button type="submit" className="btn btn-primary" id="buttonRegistro">Editar</button>
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

export default EditarReserva;