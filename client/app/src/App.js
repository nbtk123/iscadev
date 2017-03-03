import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './containers/navbar/navbar.js';
import Video from './containers/video/video.js';
import StudentsContent from './containers/studentscontent/studentscontent.js';
import Registration from './containers/registration/registration.js';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <NavBar />
        </div>
        <div className="row" style={{'paddingTop':'3.5em'}}>
          <Video />
        </div>
        <div className="row">
          <StudentsContent />
        </div>
          <div className="row">
          <Registration />
        </div>
      </div>
    );
  }
}

export default App;
