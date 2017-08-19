import React, { PropTypes, Component } from 'react';
import TextInCircle from './textincircle.js';   

import './statistics.css';

class Statistics extends Component {
    render() {
        return (
            <div className="container-fluid secondary-bg-color secondary-text-color statistics-container">
                <div className="col-md-2 statistics-circle-padding"><TextInCircle topText="200K" bottomText="Racists posts removed from social media"/></div>
                <div className="col-md-2 statistics-circle-padding"><TextInCircle topText="200" bottomText="Volunteers worldwide"/></div>
                <div className="col-md-2 statistics-circle-padding"><TextInCircle topText="20" bottomText="Cooperating organizations"/></div>
                <div className="col-md-2 statistics-circle-padding"><TextInCircle topText="4K" bottomText="Yahoo questions answered"/></div>
                <div className="col-md-2 statistics-circle-padding"><TextInCircle topText="3K" bottomText="Wikipedia activities"/></div>
                <div className="col-md-2 statistics-circle-padding"><TextInCircle topText="100" bottomText="Articles released"/></div>
            </div>
        );
    }
}

Statistics.propTypes = {

};

export default Statistics;