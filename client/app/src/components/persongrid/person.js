import React, { Component, PropTypes } from 'react';
import './person.css';

class Person extends Component {
    render() {
        return (
            <div className="person-container">
                <img src={this.props.imgsrc} className="image"/>
                <h2 className="name">{this.props.name}</h2>
                <h3 className="text">{this.props.text}</h3>
            </div>
        );
    }
}

Person.propTypes = {
    imgsrc: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
};

export default Person;