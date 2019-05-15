import React, { Component } from 'react';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import Error from './components/Error/Error';
import Clima from './components/Clima/Clima';

class App extends Component {

  state = {
    err: null,
    query: null,
    data: null
  };

  getApi = (city, country) => {
    const appId = 'b74dff6756152ca8311256ae8d4c59ac';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ city },${ country }&appid=${ appId }&units=metric`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.cod === '404') {
          return this.setState({ err: 'Ciudad no encontrada' });
        }
        this.setState({ data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getParams = query => {
    const { city, country } = query;
    if (!city || !country) {
      return this.setState({ err: 'Todos los campos son necesarios' })
    }
    this.setState({
      err: null,
      query
    });
    this.getApi(city, country);
  };

  render() {
    const { err, data } = this.state;
    return (
      <div>
        <Header />
        <Formulario data={ this.getParams } />
        { err ? <Error err={ err } /> : '' }
        { data ? <Clima data={ data } /> : '' }
      </div>
    );
  }
}

export default App;
