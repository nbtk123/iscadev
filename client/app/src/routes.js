import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { browserHistory } from 'react-router';

import App from './App';
import NotFound from './components/notfound/notfound';
import Registration from './containers/registration/registration';
import Volunteers from './containers/volunteers/volunteers';

class Routes extends Component {
    
    render() {
        return (
            <Router history={browserHistory }>
                <Route path="/" onHighlightChanged={this.props.onHighlightChanged} component={App} />
                <Route path="/register" onHighlightChanged={this.props.onHighlightChanged} component={Registration} />
                <Route path="/volunteers" onHighlightChanged={this.props.onHighlightChanged} component={Volunteers} />
                <Route path="*" onHighlightChanged={this.props.onHighlightChanged} component={NotFound} />
            </Router>
        );
    }
}

Routes.propTypes = {
  onHighlightChanged: React.PropTypes.func.isRequired,
};

export default Routes;