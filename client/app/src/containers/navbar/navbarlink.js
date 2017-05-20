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

        const classes = ["navbar-link"];
        if (this.props.fontawesome) {
            classes.push(this.props.fontawesome);
        }

        return (
            <a href={this.props.link} className="navbar-link" style={style}>
                {
                    this.props.fontawesome ? (<i className={this.props.fontawesome} style={{paddingTop:'0.2em', paddingLeft:'0.5em', paddingRight:'0.5em'}}/>) : ''
                }
                {this.props.text}
            </a>
        );
    }
}

NavbarLink.propTypes = {
    text: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired,
    highlighted: React.PropTypes.bool.isRequired,
    fontawesome: React.PropTypes.string
};

export default NavbarLink;