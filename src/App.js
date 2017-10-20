import React, { Component } from 'react';

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
import TypeformRegistration from './containers/typeformregistration/typeformregistration.js';
import Footer from './containers/footer/footer.js';

import PubSub from 'pubsub-js';
import * as events from './events.js';
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
      var elem = document.getElementById(elemId);
      window.scroll({top: elem.offsetTop-80, left: 0, behavior: 'smooth'});
    } else if (link.startsWith('/')) {
      window.location = window.location.origin + link;
    } else {
      window.location = link;
    }
  }

  isHighlighted(component) {
    return (component.getBoundingClientRect().top < 325 && component.getBoundingClientRect().top);
  }

  handleScrollCallback() {
      var highlighted = 'none'
      
      if (this.isHighlighted(this.about)) {
        highlighted = 'about';
      }
      if (this.isHighlighted(this.theprogram)) {
        highlighted = 'theprogram';
      }
      if (this.isHighlighted(this.register)) {
        highlighted = 'register';
      }

      this.props.route.onHighlightChanged({highlighted:highlighted});
  }

  render() {
    return (
      <div ref={node => this.page = node} className="App container-fluid">
        <ScrollEvent handleScrollCallback={this.handleScrollCallback} />
        <div ref={node => this.video = node} id="video" className="row" style={{'marginTop':'5.5em'}}>
          <Video />
        </div>
        <div ref={node => this.about = node} id="about" className="row">
          <div className="col-md-7">
            <About />
          </div>
          <div ref={node => this.facebook = node} className="col-md-5">
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
        <div className="row" ref={node => this.register = node} id="apply">
          <TypeformRegistration />
        </div>
        <div className="row" ref={node => this.footer = node}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;