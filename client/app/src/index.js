import React , { Component } from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';

import NavBar from './containers/navbar/navbar.js';

import './index.css';
import './App.css';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {highlighted:'none'};
    this.onHighlightChanged = this.onHighlightChanged.bind(this);
  }

  onHighlightChanged(obj) {
    this.setState(obj);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <NavBar highlighted={this.state.highlighted} />
        </div>
        <div className="row">
          <Routes onHighlightChanged={this.onHighlightChanged}/>
        </div>
      </div>
    );
  }
}

export default Main;

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
