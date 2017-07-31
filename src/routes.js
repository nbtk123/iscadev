import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { browserHistory } from 'react-router';

import App from './App';
import NotFound from './components/notfound/notfound';
import Team2 from './containers/team/team2.js';
import Docs from './containers/docs/docs';
import ContactUs from './containers/contactus/contactus.js';

class Routes extends Component {

    //We defined the router outeide of "render()" because it throws an error when changing the state in index.js
    router = (
            <Router history={browserHistory }>
                <Route path="/" onHighlightChanged={this.props.onHighlightChanged} component={App} />
                <Route path="/team" onHighlightChanged={this.props.onHighlightChanged} component={Team2} />
                <Route path="/docs" onHighlightChanged={this.props.onHighlightChanged} component={Docs} />
                <Route path="/contactus" onHighlightChanged={this.props.onHighlightChanged} component={ContactUs} />
                <Route path="*" onHighlightChanged={this.props.onHighlightChanged} component={NotFound} />
            </Router>
        );

    render() {
        return this.router
    }
}

Routes.propTypes = {
  onHighlightChanged: React.PropTypes.func.isRequired,
};

export default Routes;