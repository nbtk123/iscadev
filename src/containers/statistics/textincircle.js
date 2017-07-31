import React, { Component, PropTypes } from 'react';

import './textincircle.css';

class TextInCircle extends Component {
    render() {
        return (
            <div className="textincircle-circle">
                <h2>{this.props.topText}</h2>
                <h4 className="textincircle-bottomtextcontainer">{this.props.bottomText}</h4>
            </div>
        );
    }
}

TextInCircle.propTypes = {
    topText: React.PropTypes.string.isRequired,
    bottomText: React.PropTypes.string.isRequired,
};

export default TextInCircle;