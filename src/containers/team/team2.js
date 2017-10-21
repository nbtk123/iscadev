import React, { Component, PropTypes } from 'react';
import TeamMember2 from './teammember2.js'

import PubSub from 'pubsub-js';
import * as events from '../../events.js';
import {studentlist} from './studentlist.js'

import './team2.css'

class Team2 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      students: studentlist
    }

    this.studentsRows = [];
  }

  componentWillMount() {
    this.TOKEN_NAVBAR_LINK_CLICK = PubSub.subscribe(events.NAVBAR_LINK_CLICK, this.onNavbarLinkClick);
    this.props.route.onHighlightChanged({highlighted:'team'});
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.TOKEN_NAVBAR_LINK_CLICK);
  }

  onNavbarLinkClick(topic, link) {
    if (link.startsWith('/')) {
      window.location = window.location.origin + link;
    } else {
      window.location = link;
    }
  }

  render() {
    return (
      <div className="container-fluid team2-container">
        <div className="row secondary-text-color">
          <h1 className="col-md-12 team2-title">Meet The Team</h1>
        </div>
        <div className="container">
          <h4 className="primary-text-color team2-subtitle">Our team is committed to making the internet a hate free environment.<br/>We love what we do and who we do it with.</h4>
        </div>
        {
          <div className="container team2-members-container">
            <div className="row">
            {
              this.state.students.map((student, i) => {
                return (
                    <TeamMember2 {...student} key={i}/>
                )
              })
            }
            </div>
          </div>
        }
      </div>
    );
  }
}

Team2.propTypes = {

};

export default Team2;