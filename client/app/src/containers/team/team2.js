import React, { Component, PropTypes } from 'react';
import TeamMember2 from './teammember2.js'

import PubSub from 'pubsub-js';
import * as events from '../../events.js';

import './team2.css'

class Team2 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      students: [
                    {
                        name: "Williamson",
                        text: "Live in Lalaland",
                        imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg",
                        iscayear: "2017"
                    },
                    {
                        name: "Williamson",
                        text: "Live in Lalaland",
                        imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg",
                        iscayear: "2017"
                    },
                    {
                        name: "Williamson",
                        text: "Live in Lalaland",
                        imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg",
                        iscayear: "2017"
                    },
                    {
                        name: "Williamson",
                        text: "Live in Lalaland",
                        imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg",
                        iscayear: "2017"
                    },
                    {
                        name: "Williamson",
                        text: "Live in Lalaland",
                        imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg",
                        iscayear: "2017"
                    },
                ]
    }
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
          <h1 className="col-xs-12 team2-title">Team</h1>
        </div>
        <div className="row team2-members-container">
          {
            this.state.students.map(function (student, i) {
              return (
                <TeamMember2 {...student} key={i}/>
              )
            })
          }
        </div>
      </div>
    );
  }
}

Team2.propTypes = {

};

export default Team2;