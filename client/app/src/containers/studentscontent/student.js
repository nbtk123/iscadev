import React, { Component, PropTypes } from 'react';
import './student.css';

class Student extends Component {
    render() {
        return (
            <div className="student-container">
                <img src={this.props.imgsrc} className="image"/>
                <h2 className="name">{this.props.name}</h2>
                <h3 className="text">{this.props.text}</h3>
            </div>
        );
    }
}

Student.propTypes = {
    imgsrc: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
};

export default Student;