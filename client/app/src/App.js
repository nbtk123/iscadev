import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Video from './containers/video/video.js';
import About from './containers/about/about.js';
import PersonGrid from './components/persongrid/persongrid.js'
import ContactUs from './containers/contactus/contactus.js';
import ScrollEvent from 'react-onscroll';
import ISCAFacebook from './containers/facebook/facebook.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.handleScrollCallback = this.handleScrollCallback.bind(this);
    this.state = {
      team: [
                {
                    name: "רועי",
                    text: "סטודנט למשפטים ומנהל עסקים בבינתחומי, מקים התוכנית בלה בלה בלה",
                    imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg"
                },
                {
                    name: "שיראל",
                    text: "סטודנטית למשה-משהו בבינתחומי, תפקידה בלה בלה בלה",
                    imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg"
                },
                {
                    name: "מישהו",
                    text: "שרה שרה שיר שמח גנן גידל דגן בגן",
                    imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg"
                },
            ],
    }
  }

  isHighlighted(component) {
    return (component.getBoundingClientRect().top < 325 && component.getBoundingClientRect().top);
  }

  handleScrollCallback() {
      var somethingighlighted = false;
      
      if (this.isHighlighted(this.about)) {
        somethingighlighted = true;
        this.props.route.onHighlightChanged({highlighted:'about'});
      }
      if (this.isHighlighted(this.team)) {
        somethingighlighted = true;
        this.props.route.onHighlightChanged({highlighted:'team'});
      }
      if (this.isHighlighted(this.contactus)) {
        somethingighlighted = true;
        this.props.route.onHighlightChanged({highlighted:'contactus'});
      }
      if (!somethingighlighted) {
        this.props.route.onHighlightChanged({highlighted:'none'});
      }
  }

  render() {
    return (
      <div ref={node => this.page = node} className="App container-fluid">
        <ScrollEvent handleScrollCallback={this.handleScrollCallback} />
        <div ref={node => this.video = node} id="video" className="row" style={{'paddingTop':'3.5em'}}>
          <Video />
        </div>
        <div ref={node => this.about = node} id="about" className="row" style={{'display':'flex', 'alignItems':'center'}}>
          <div className="col-xs-7">
            <About />
          </div>
          <div className="col-xs-5" style={{'display':'flex', 'alignItems':'center'}}>
              <ISCAFacebook />
          </div>
        </div>
        <div ref={node => this.team = node} id="team" className="row">
          <PersonGrid persons={this.state.team} howMuchInLine="3" />
        </div>
          <div ref={node => this.contactus = node} id="contactus" className="row">
          <ContactUs />
        </div>
      </div>
    );
  }
}

export default App;