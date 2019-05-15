import React, { Component } from 'react';

class Clima extends Component {
  render() {
    const { name, main: { temp, temp_min, temp_max} } = this.props.data;

    return (
      <div className="container">
        <div className="row justify-content-center py-4">
          <div className="col-lg-6 bg-primary text-white p-4">
            <div className="display-4 mb-2 text-center">{ name }</div>
            <div>
              <strong>Temp: </strong>
              { temp }
            </div>
            <div>
              <strong>Temp Max: </strong>
              { temp_min }
            </div>
            <div>
              <strong>Temp Min: </strong>
              { temp_max }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Clima;
