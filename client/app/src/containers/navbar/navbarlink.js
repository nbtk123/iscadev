import React, { Component, PropTypes } from 'react';
import './navbarlink.css';

class NavbarLink extends Component {
    render() {
        return (
            <a href={this.props.link} className="navbar-link" style={this.props.highlighted ? {'color':'#00bfff'} : {}}>
                {this.props.text}
            </a>
        );
    }
}

NavbarLink.propTypes = {
    text: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired,
    highlighted: React.PropTypes.bool.isRequired
};

export default NavbarLink;