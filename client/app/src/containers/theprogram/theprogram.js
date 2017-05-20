import React, { Component, PropTypes } from 'react';
import TheProgramBox from './theprogrambox.js';

import './theprogram.css';

class TheProgram extends Component {
  render() {
    return (
      <div className="container-fluid theprogram-container">
        <h2 className="theprogram-title">The Program:</h2>
        <div className="theprogram-boxes-container">
          <TheProgramBox />
          <TheProgramBox />
          <TheProgramBox />
        </div>
      </div>
    );
  }
}

TheProgram.propTypes = {

};

export default TheProgram;