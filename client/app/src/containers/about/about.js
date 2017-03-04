import React, { Component, PropTypes } from 'react';
import './about.css';

class About extends Component {
    render() {
        return (
            <div className="container about secondary-bg-color secondary-text-color">
                <div className="row" style={{'textAlign':'left'}}>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
                </div>
            </div>
        );
    }
}

About.propTypes = {

};

export default About;