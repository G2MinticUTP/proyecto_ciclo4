import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class CredencialesIncorrectas extends Component {
  render() {
    return (
      <div id="contenIncorrect">
        <div className="card text-bg-dark"
          id='credIncorrectas'>
          <div className="card-body text-center">
            <h2 className="card-title">Credenciales incorrectas</h2>
            <div className="col-12">
              <Link to="/"><button type="submit" className="btn btn-primary" id="button">Volver</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}