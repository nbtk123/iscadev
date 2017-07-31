import React, { Component, PropTypes } from 'react';
import './pagebutton.css';

class PageButton extends Component {
    render() {
        return (
            <div className="background" onClick={this.props.onClick}>
                {this.props.text}
            </div>
        );
    }
}

PageButton.propTypes = {
    text: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired,
};

export default PageButton;