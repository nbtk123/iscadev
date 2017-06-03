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
                        name: "יושימיצו אישימוטו",
                        text: "סטודנט למנהל עסקים בבית הספר הבינלאומי, שנה ב'",
                        imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg",
                        iscayear: "2017"
                    },
                    {
                        name: "יושימיצו אישימוטו",
                        text: "סטודנט למנהל עסקים בבית הספר הבינלאומי, שנה ב'",
                        imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg",
                        iscayear: "2017"
                    },
                    {
                        name: "יושימיצו אישימוטו",
                        text: "סטודנט למנהל עסקים בבית הספר הבינלאומי, שנה ב'",
                        imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg",
                        iscayear: "2017"
                    },
                    {
                        name: "יושימיצו אישימוטו",
                        text: "סטודנט למנהל עסקים בבית הספר הבינלאומי, שנה ב'",
                        imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg",
                        iscayear: "2017"
                    },
                    {
                        name: "יושימיצו אישימוטו",
                        text: "סטודנט למנהל עסקים בבית הספר הבינלאומי, שנה ב'",
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
        <ul className="team2-ul">
          {
            this.state.students.map(function (student, i) {
              return (
                <li className="team2-li">
                  <TeamMember2 {...student} key={i}/>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

Team2.propTypes = {

};

export default Team2;