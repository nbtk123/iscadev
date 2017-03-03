import React, { Component, PropTypes } from 'react';
import './pagebutton.css';

class PageButton extends Component {
    render() {
        return (
            <div className="background">
                {this.props.text}
            </div>
        );
    }
}

PageButton.propTypes = {
    text: React.PropTypes.string.isRequired
};

export default PageButton;