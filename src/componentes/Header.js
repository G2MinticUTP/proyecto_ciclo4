import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <header>
        <nav className="navbar" id="cab">
          <div className="container-fluid">
            <a className="navbar-brand" href="Página Coworking.html">
              <img
                className="Logo"
                src="img/LogoG2.png"
                width="180"
                alt="."
              />
            </a>
            <a className="navbar-brand" href="/">
              <img
                src="img/BotonLogin.png"
                width="50"
                alt="."
              />
            </a>
          </div>
        </nav>
      </header>
    )
  }
}

