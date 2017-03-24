import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

class NotFound extends Component {
    render() {
        const { ...props } = this.props;
        return (
            <div {...props}>
                <h1>
                404 <small>Not Found :(</small>
                </h1>
            </div>
        );
    }
}

export default NotFound;