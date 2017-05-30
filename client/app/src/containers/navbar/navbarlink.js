import React, { Component, PropTypes } from 'react';
import PubSub from 'pubsub-js'
import * as events from '../../events.js';
import './navbarlink.css';

class NavbarLink extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        PubSub.publish(events.NAVBAR_LINK_CLICK, this.props.link);
    }

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
            <div onClick={this.onClick} className="navbar-link" style={style}>
                {
                    this.props.fontawesome ? (<i className={this.props.fontawesome} style={{paddingTop:'0.2em', paddingLeft:'0.5em', paddingRight:'0.5em'}}/>) : ''
                }
                {this.props.text}
            </div>
        );
    }
}

NavbarLink.propTypes = {
    text: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired,
    highlighted: React.PropTypes.bool.isRequired,
    fontawesome: React.PropTypes.string,
};

export default NavbarLink;