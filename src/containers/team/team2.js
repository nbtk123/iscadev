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
          <h1 className="col-md-12 team2-title">Team</h1>
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