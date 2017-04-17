import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { browserHistory } from 'react-router';

import App from './App';
import NotFound from './components/notfound/notfound';
import Registration from './containers/registration/registration';
import Team from './containers/team/team';
import Docs from './containers/docs/docs';
import ContactUs from './containers/contactus/contactus.js';

class Routes extends Component {
    
    render() {
        return (
            <Router history={browserHistory }>
                <Route path="/" onHighlightChanged={this.props.onHighlightChanged} component={App} />
                <Route path="/register" onHighlightChanged={this.props.onHighlightChanged} component={Registration} />
                <Route path="/team" onHighlightChanged={this.props.onHighlightChanged} component={Team} />
                <Route path="/docs" onHighlightChanged={this.props.onHighlightChanged} component={Docs} />
                <Route path="/contactus" onHighlightChanged={this.props.onHighlightChanged} component={ContactUs} />
                <Route path="*" onHighlightChanged={this.props.onHighlightChanged} component={NotFound} />
            </Router>
        );
    }
}

Routes.propTypes = {
  onHighlightChanged: React.PropTypes.func.isRequired,
};

export default Routes;