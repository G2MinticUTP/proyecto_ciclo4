import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer className="bg-light text-center p-3">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <p className="text-uppercase">Quienes Somos</p>
            <p className="text-uppercase">Misión</p>
            <p className="text-uppercase">Visión</p>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <p className="text-uppercase">Contacto</p>
            <p className="text-uppercase">Correo electrónico</p>
          </div>
        </div>
      </footer >
    )
  }
}
