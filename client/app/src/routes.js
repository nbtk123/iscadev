import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { browserHistory } from 'react-router';

import App from './App';
import NotFound from './components/notfound/notfound';

class Routes extends Component {
    
    render() {
        return (
            <Router history={browserHistory }>
                <Route path="/" component={App} />
                <Route path="*" component={NotFound} />
            </Router>
        );
    }
}

export default Routes;