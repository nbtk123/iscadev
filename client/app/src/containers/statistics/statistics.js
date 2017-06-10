import React, { PropTypes, Component } from 'react';
import TextInCircle from './textincircle.js';   

import './statistics.css';

class Statistics extends Component {
    render() {
        return (
            <div className="container-fluid secondary-bg-color secondary-text-color statistics-container">
                <div className="col-md-3 statistics-circle-padding"><TextInCircle topText="10+" bottomText="HOURS PER DAY"/></div>
                <div className="col-md-3 statistics-circle-padding"><TextInCircle topText="10+" bottomText="HOURS PER DAY"/></div>
                <div className="col-md-3 statistics-circle-padding"><TextInCircle topText="10+" bottomText="HOURS PER DAY"/></div>
                <div className="col-md-3 statistics-circle-padding"><TextInCircle topText="10+" bottomText="HOURS PER DAY"/></div>
            </div>
        );
    }
}

Statistics.propTypes = {

};

export default Statistics;