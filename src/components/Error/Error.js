import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Error extends Component {
  render() {
    return (
      <div className="alert alert-danger fade show" role="alert">
        <strong>Opps parece que hubo un error</strong> { this.props.err }
        <button type="button" className="close">
        </button>
      </div>
    );
  }
}

Error.propTypes = {
  err: PropTypes.string.isRequired,
};

export default Error;
