import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './footericon.css';

class FooterIcon extends Component {
  render() {
    return (
      <a href={this.props.link} className="footer-icon">
        {
          this.props.fontawesome ? (<i className={this.props.fontawesome} style={{paddingTop:'0.2em', paddingLeft:'0.5em', paddingRight:'0.5em'}}/>) : ''
        }
        {this.props.text}
      </a>
    );
  }
}

FooterIcon.propTypes = {
  link: React.PropTypes.string.isRequired,
  fontawesome: React.PropTypes.string,
};

export default FooterIcon;