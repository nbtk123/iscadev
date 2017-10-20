import React, { Component, PropTypes } from 'react';
import TheProgramBox from './theprogrambox.js';

import './theprogram.css';

class TheProgram extends Component {

  boxes = [
    {
      title: "Syllabus",
      items: [
        "Two academic credits",
        "Professional advocacy lectures given by ambassadors, professors and journalists",
        "Quarterly meetups at IDC Herzliya and The Israeli Ministry of Foreign Affairs",
        "Small to medium teams according to student’s skills and desires",
        "80% of the work is done from home using ISCA’s technological platforms and networks",
        "20% of the work will be dedicated to personal projects"
      ]
    },
    {
      title: "Opportunities",
      items: [
        "Social network monitoring (Facebook, Youtube, twitter, etc.)",
        "Academic research and writing for ISCA’s newsletter, website, wikipedia educational effort",
        "Participation in professional committees (the Knesset / NGO’s)",
        "Designing informative graphics",
        "Editing and creating informative youtube videos",
        "Developing and maintaining web applications"
      ]
    },
    {
      title: "Candidates",
      items: [
        "Competent English speaker",
        "Currently studying at IDC Herzliya [<a href='/contactus'>Why we ask for this</a>]",
        "Minimum 30 Volunteering hours per semester",
        "Ability to work both from home and in a team.",
        "Committed to excellence and results driven "
      ]
    },
  ]

  render() {
    return (
      <div className="container theprogram-container bold">
        <h2 className="theprogram-title">The Program:</h2>
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