import React, { Component, PropTypes } from 'react';
import TheProgramBox from './theprogrambox.js';

import './theprogram.css';

class TheProgram extends Component {
  render() {
    return (
      <div className="container theprogram-container">
        <h2 className="theprogram-title">The Program:</h2>
        <div className="container-fluid theprogram-boxes-container">
          <div className="col-md-4 theprogram-boxes-col"><TheProgramBox /></div>
          <div className="col-md-4 theprogram-boxes-col"><TheProgramBox /></div>
          <div className="col-md-4 theprogram-boxes-col"><TheProgramBox /></div>
        </div>
      </div>
    );
  }
}

TheProgram.propTypes = {

};

export default TheProgram;