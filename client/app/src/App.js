import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import * as events from './events.js';

import logo from './logo.svg';
import './App.css';

import Video from './containers/video/video.js';
import About from './containers/about/about.js';
import PersonGrid from './components/persongrid/persongrid.js'
import ContactUs from './containers/contactus/contactus.js';
import ScrollEvent from 'react-onscroll';
import ISCAFacebook from './containers/facebook/facebook.js'
import Statistics from './containers/statistics/statistics.js';
import TheProgram from './containers/theprogram/theprogram.js';
import VideoGrid from './containers/videogrid/videogrid.js';
import AfterGraduate from './containers/aftergraduate/aftergraduate.js';
import PartnersPager from './containers/partnerspager/partnerspager.js';

require('smoothscroll-polyfill').polyfill();

class App extends Component {

  constructor(props) {
    super(props);
    this.handleScrollCallback = this.handleScrollCallback.bind(this);
    this.onNavbarLinkClick = this.onNavbarLinkClick.bind(this);
  }

  componentWillMount() {
    this.TOKEN_NAVBAR_LINK_CLICK = PubSub.subscribe(events.NAVBAR_LINK_CLICK, this.onNavbarLinkClick);
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.TOKEN_NAVBAR_LINK_CLICK);
  }

  onNavbarLinkClick(topic, link) {
    if (link.startsWith('/#')) {
      var elemId = link.substring('/#'.length, link.length);
      console.log('scrolling to ', elemId);
      var elem = document.getElementById(elemId);
      window.scroll({top: elem.offsetTop, left: 0, behavior: 'smooth'});
    } else {
      window.location = window.location.origin + link;
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
      if (this.isHighlighted(this.theprogram)) {
        somethingighlighted = true;
        this.props.route.onHighlightChanged({highlighted:'theprogram'});
      }
      if (!somethingighlighted) {
        this.props.route.onHighlightChanged({highlighted:'none'});
      }
  }

  render() {
    return (
      <div ref={node => this.page = node} className="App container-fluid">
        <ScrollEvent handleScrollCallback={this.handleScrollCallback} />
        <div ref={node => this.video = node} id="video" className="row" style={{'paddingTop':'5.5em'}}>
          <Video />
        </div>
        <div ref={node => this.about = node} id="about" className="row" style={{'display':'flex', 'alignItems':'center'}}>
          <div className="col-xs-7">
            <About />
          </div>
          <div ref={node => this.facebook = node} className="col-xs-5" style={{'display':'flex', 'alignItems':'center'}}>
            <ISCAFacebook />
          </div>
        </div>
        <div className="row" ref={node => this.statistics = node}>
          <Statistics />
        </div>
        <div className="row" ref={node => this.theprogram = node} id="theprogram">
          <TheProgram />
        </div>
        <div className="row" ref={node => this.partners = node}>
          <PartnersPager />
        </div>
        <div className="row" ref={node => this.videogrid = node}>
          <VideoGrid />
        </div>
        <div className="row" ref={node => this.aftergraduate = node}>
          <AfterGraduate />
        </div>
      </div>
    );
  }
}

export default App;