import React, { Component, PropTypes } from 'react';

import './teammember2.css'

class TeamMember2 extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
        <div className="col-md-1">
            <div className="our-team">
                <img src={this.props.imgsrc} />
                <div className="team-content">
                    <h3 className="title secondary-font-family">{this.props.name}</h3>
                    <span className="post">{this.props.text}</span>
                </div>
            </div>
        </div>
    );
  }
}

TeamMember2.propTypes = {
  name: React.PropTypes.string.isRequired,
  text: React.PropTypes.string,
  imgsrc: React.PropTypes.string.isRequired,
  iscayear: React.PropTypes.string
};

export default TeamMember2;