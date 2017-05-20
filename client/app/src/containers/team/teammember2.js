import React, { Component, PropTypes } from 'react';

import './teammember2.css'

class TeamMember2 extends Component {

  constructor(props) {
    super(props);

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseOver(event) {
    this.textContainer.style.maxWidth = '5em'
  }

  onMouseOut(event) {
    this.textContainer.style.maxWidth = '0';
  }

  render() {

    return (
      <div className="teammember2-container" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} >
        <ul className="teammember2-ul">
          <li className="teammember2-li">
            <div className="teammember2-circle-border">
              <img className="teammember2-image" src={this.props.imgsrc} />
            </div>
          </li>
          <li ref={node => this.textContainer = node} className="teammember2-li teammember2-text-li">
            Yolo Polo
          </li>
        </ul>
      </div>
    );
  }
}

TeamMember2.propTypes = {
  name: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  imgsrc: React.PropTypes.string.isRequired,
  iscayear: React.PropTypes.string.isRequired
};

export default TeamMember2;