import React, { Component, PropTypes } from 'react';
import './navbarlink.css';

class NavbarLink extends Component {
    render() {

        const style={
            'color': this.props.highlighted ? '#00bfff' : '',
            'display': 'flex',
            'alignContent': 'center',
            'justifyContent': 'flex-end',
            'flexDirection': 'column'
        };

        return (
            <a href={this.props.link} className="navbar-link" style={style}>
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