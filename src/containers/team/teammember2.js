import React, { Component, PropTypes } from 'react';

import './teammember2.css'

class TeamMember2 extends Component {

  constructor(props) {
    super(props);
    
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseOver(element) {
    // var target = element.target;

    // // Find the image container
    // while (target.className != 'our-team') {
    //   target = target.parentElement;
    // }

    // // set top-margin to current screen location
    // target.style.marginTop = target.style.top;
    // target.style.position = 'absolute'
    // console.log(target.className)
  }

  onMouseOut(element) {
    // var target = element.target;

    // // Find the image container
    // while (target.className != 'our-team') {
    //   target = target.parentElement;
    // }
    
    // //target.style.position = 'relative'

    // // set top-margin to current screen location
    // target.style.marginTop = 0;
    // console.log(target.className)
  }

  render() {

    return (
        <div className="col-md-1">
            <div className="our-team" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
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