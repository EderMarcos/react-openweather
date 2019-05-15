import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="alert alert-success text-center mb-0">
        <h4 className="alert-heading">Clima React!</h4>
        <p className="mb-0  ">Aplicacion de React que consume la api de Open Weather</p>
      </div>
    );
  }
}

export default Header;
