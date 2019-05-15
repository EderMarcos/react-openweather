import React, { Component } from 'react';

class Formulario extends Component {

  city = React.createRef();
  country = React.createRef();

  getClima = e => {
    e.preventDefault();
    const city = this.city.current.value;
    const country = this.country.current.value;
    this.props.data({ city, country });
    e.currentTarget.reset();
  };

  render() {
    return (
      <div className="bg-dark">
        <div className="container">
          <form onSubmit={ this.getClima }>
            <div className="row py-4">
              <div className="col">
                <input type="text" className="form-control" placeholder="Ciudad" ref={ this.city } />
              </div>
              <div className="col">
                <select className="form-control" id="country" ref={ this.country }>
                  <option value="" defaultValue>Elige un pais</option>
                  <option value="AR">Argentina</option>
                  <option value="CO">Colombia</option>
                  <option value="CR">Costa Rica</option>
                  <option value="ES">España</option>
                  <option value="MX">Mexico</option>
                  <option value="US">Estados Unidos</option>
                  <option value="PE">Peru</option>
                </select>
              </div>
              <div className="col">
                <button type="submit" className="btn btn-light btn-block">Buscar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Formulario;
