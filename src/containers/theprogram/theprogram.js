import React, { Component, PropTypes } from 'react';
import TheProgramBox from './theprogrambox.js';

import './theprogram.css';

class TheProgram extends Component {

  boxes = [
    {
      title: "Syllabus",
      items: [
        "Professional advocacy lectures given by ambassadors, professors and journalists",
        "Quarterly meetups at IDC Herzliya and The Israeli Ministry of Foreign Affairs",
        "Minimum 30 Volunteering hours per semester",
        "Small to Medium teams according to student’s desires and skills",
        "80% of the work is done from home using ISCA’s technological platforms and networks",
        "20% of the work will be dedicated to personal projects in the field of Advocacy"
      ]
    },
    {
      title: "Opportunities",
      items: [
        "Social network monitoring (Facebook, Youtube, twitter, etc.)",
        "Academic research and writing for ISCA’s newsletter and website",
        "Participation in professional committees (the Knesset / NGO’s)",
        "Designing informative graphics \ Youtube videos",
        "Developing and maintaining technological tools"
      ]
    },
    {
      title: "Candidates",
      items: [
        "Something",
      ]
    },
  ]

  render() {
    return (
      <div className="container theprogram-container">
        <h2 className="theprogram-title primary-text-color">The Program:</h2>
        <div className="container-fluid theprogram-boxes-container">
          <div className="col-md-4 theprogram-boxes-col"><TheProgramBox {... this.boxes[0]} /></div>
          <div className="col-md-4 theprogram-boxes-col"><TheProgramBox {... this.boxes[1]} /></div>
          <div className="col-md-4 theprogram-boxes-col"><TheProgramBox {... this.boxes[2]} /></div>
        </div>
      </div>
    );
  }
}

TheProgram.propTypes = {

};

export default TheProgram;