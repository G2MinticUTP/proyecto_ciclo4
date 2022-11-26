import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

const RecuperarClave = () => {
    return(
        <Fragment>
            <Header></Header>
            <div className="títulos">
                <h1>RECUPERACIÓN DE CONTRASEÑA</h1>
            </div>

            <div className="login">
			<div className="login-screen-recuperacion">
				
                <div className="text-area2">
                    <label id = "texto">Escribe el correo electrónico de recuperación</label>
                </div>
                  
				<div className="login-form">
					
					<div className="control-group">
						<input
							type="adress"
							className="login-field"
							placeholder="Correo electrónico"
							id="login-pass"
						/>
						<label
							className="login-field-icon fui-lock"
						></label>
					</div>

					<a id="boton-recuperacion" className="btn btn-primary btn-large btn-block" href="..">Enviar</a>
				</div>
			</div>
		</div>
            <Footer></Footer>
        </Fragment>
    );
}

export default RecuperarClave