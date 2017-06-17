import React, { Component, PropTypes } from 'react';
import TheProgramBox from './theprogrambox.js';

import './theprogram.css';

class TheProgram extends Component {

  boxes = [
    {
      title: "Opportunities",
      items: [
        "Social network monitoring (Facdebook, Youtube, twitter, etc.)",
        "Researching and writing professional articles",
        "Development of the program’s website\mobile app",
        "Designing informative graphics."
      ]
    },
    {
      title: "Upon Acceptance",
      items: [
        "Students will receive the chance to work independently or in groups, with organizations both in Israel and around the world.",
      ]
    },
  ]

  render() {
    return (
      <div className="container theprogram-container">
        <h2 className="theprogram-title primary-text-color">The Program:</h2>
        <div className="container-fluid theprogram-boxes-container">
          <div className="col-md-12 theprogram-boxes-col"><TheProgramBox {... this.boxes[0]} /></div>
          <div className="col-md-12 theprogram-boxes-col"><TheProgramBox {... this.boxes[1]} /></div>
        </div>
      </div>
    );
  }
}

TheProgram.propTypes = {

};

export default TheProgram;