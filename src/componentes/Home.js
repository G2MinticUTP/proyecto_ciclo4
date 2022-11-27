import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
    return(
        <Fragment>
            <Header></Header>
            <div className="títulos">
                <h2>RESERVA DE ESPACIOS COWORKING</h2>
            </div>

            <div className="card mt-3 cards text-center container-fluid">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src="Img/oficina1.jpg"
                            className="img-fluid rounded-start"
                            alt="..."
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">ESPACIO 1</h5>
                            <p className="card-text">
                                Oficina ubicada en zona norte, cuenta con un
                                amplio espacio de trabajo, totalmente
                                amoblada, cerca a zonas comerciales.
                            </p>
                        </div>
                        <div className="card-footer bg-transparent border-success">
                            <p className="card-text">
                                <small className="text-muted">Para ver más detalles da click aquí</small>
                            </p>
                            <a href="/CrearCoworking" className="btn btn-primary">RESERVA AQUÍ</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mt-3 cards text-center container-fluid">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src="Img/oficina2.png"
                            className="img-fluid rounded-start"
                            alt="..."
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">ESPACIO 2</h5>
                            <p className="card-text">
                                Oficina con espacios de esparcimiento, en zona
                                noroccidente, cuenta con zonas verdes, cerca
                                de establecimientos comerciales y zona de
                                comidas.
                            </p>
                        </div>
                        <div className="card-footer bg-transparent border-success">
                            <p className="card-text">
                                <small className="text-muted">Para ver más detalles da click aquí</small>
                            </p>
                            <a href="/CrearCoworking" className="btn btn-primary">RESERVA AQUÍ</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mt-3 cards text-center container-fluid">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src="Img/oficina3.jpg"
                            className="img-fluid rounded-start"
                            alt="..."
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">ESPACIO 3</h5>
                            <p className="card-text">
                                Oficina ubicada en zona tranquila de la
                                ciudad, cuenta con sala de juntas, espacios de
                                trabajo individuales y buena iluminación.
                            </p>
                        </div>
                        <div className="card-footer bg-transparent border-success">
                            <p className="card-text">
                                <small className="text-muted">Para ver más detalles da click aquí</small>
                            </p>
                            <a href="/CrearCoworking" className="btn btn-primary">RESERVA AQUÍ</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mt-3 cards text-center container-fluid">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src="Img/oficina4.jpg"
                            className="img-fluid rounded-start"
                            alt="..."
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">ESPACIO 4</h5>
                            <p className="card-text">
                                Oficina ubicada en zona tranquila de la
                                ciudad, cuenta con sala de juntas, espacios de
                                trabajo individuales y buena iluminación.
                            </p>
                        </div>
                        <div className="card-footer bg-transparent border-success">
                            <p className="card-text">
                                <small className="text-muted">Para ver más detalles da click aquí</small>
                            </p>
                            <a href="/CrearCoworking" className="btn btn-primary">RESERVA AQUÍ</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </Fragment>
    );
}

export default Home;