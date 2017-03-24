import React, { Component, PropTypes } from 'react';
import './teammember.css';

class TeamMember extends Component {
    render() {
        return (
            <div className="teammember-container">
                <img src={this.props.imgsrc} className="image"/>
                <h2 className="name">{this.props.name}</h2>
                <h3 className="text">{this.props.text}</h3>
            </div>
        );
    }
}

TeamMember.propTypes = {
    imgsrc: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
};

export default TeamMember;