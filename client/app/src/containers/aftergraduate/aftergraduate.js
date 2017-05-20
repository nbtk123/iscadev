import React, { Component, PropTypes } from 'react';
import './aftergraduate.css'

class AfterGraduate extends Component {
  render() {
    return (
      <div className="container primary-bg-color after-graduate-container">
        <div className="row">
          <div className="col-xs-7" style={{textAlign:'left'}}>
            <h2>After you graduate the program</h2>
            <h3>Our boot camp will send you out into the market with the skills, the connections, the know-how and the inspiration to launch your career as a junior web developer.</h3>
          </div>
          <div className="col-xs-4 col-xs-offset-1" style={{textAlign:'left'}}>
            <h2>
              Tuition
            </h2>
            <h3>
              Something to write here
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