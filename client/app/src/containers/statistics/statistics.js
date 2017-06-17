import React, { PropTypes, Component } from 'react';
import TextInCircle from './textincircle.js';   

import './statistics.css';

class Statistics extends Component {
    render() {
        return (
            <div className="container-fluid secondary-bg-color secondary-text-color statistics-container">
                <div className="col-md-2 statistics-circle-padding"><TextInCircle topText="15,000+" bottomText="FACEBOOK REPORTS"/></div>
                <div className="col-md-2 statistics-circle-padding"><TextInCircle topText="7,300+" bottomText="TWITTER REPORTS"/></div>
                <div className="col-md-2 statistics-circle-padding"><TextInCircle topText="6,300+" bottomText="TWITTER REPORTS"/></div>
                <div className="col-md-2 statistics-circle-padding"><TextInCircle topText="4,300+" bottomText="YOUTUBE REPORTS"/></div>
                <div className="col-md-2 statistics-circle-padding"><TextInCircle topText="3,000+" bottomText="YAHOO QUESTIONS"/></div>
                <div className="col-md-2 statistics-circle-padding"><TextInCircle topText="2,200+" bottomText="WIKIPEDIA ACTIVITIES"/></div>
            </div>
        );
    }
}

Statistics.propTypes = {

};

export default Statistics;