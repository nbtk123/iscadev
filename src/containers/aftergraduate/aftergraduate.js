import React, { Component, PropTypes } from 'react';
import './aftergraduate.css'

class AfterGraduate extends Component {
  render() {
    return (
      <div className="container primary-bg-color after-graduate-container">
        <div className="row">
          <div className="col-md-7" style={{textAlign:'left'}}>
            <h2>After you graduate the program</h2>
              <h3>Alumni of the program continue to contribute in various high ranking positions across the private and public sector. Alumni who wish to continue volunteering will be eligible to join ISCA’s scholarship program.</h3>
          </div>
          <div className="col-md-4 col-md-offset-1" style={{textAlign:'left'}}>
            <h2>
              Registration
            </h2>
            <h3>
              Registration to the program will be open in October. Join our <a href="https://www.facebook.com/ISCAorg/">Facebook community</a> for updates. 
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

AfterGraduate.propTypes = {

};

export default AfterGraduate;