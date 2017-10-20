import React, { Component, PropTypes } from 'react';
import './navbar.css';
import NavbarLink from './navbarlink.js'

import PubSub from 'pubsub-js';
import * as events from '../../events.js';

class NavBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isMenuNavbarOpen: false,
            topNavbarMenuClassName: "navbar-menu-items-ul",
            navbarRowClassName: "navbar-row",
            navbarImageDivClassName: "navbar-image-div",
        }
    }

    componentWillMount() {
        this.TOKEN_NAVBAR_LINK_CLICK = PubSub.subscribe(events.NAVBAR_LINK_CLICK, this.onNavbarLinkClick);
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.TOKEN_NAVBAR_LINK_CLICK);
    }

    onNavbarLinkClick = () => {
        this.openNavMenu()
    }

    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    openNavMenu = () => {
        this.setResponsive('topNavbarMenuClassName', "navbar-menu-items-ul");
        this.setResponsive('navbarRowClassName', "navbar-row");
        this.setResponsive('navbarImageDivClassName', "navbar-image-div");
        
        this.setState({isMenuNavbarOpen: !this.state.isMenuNavbarOpen});
    }

    setResponsive = (stateKey, className) => {
        if (this.state[stateKey] === className) {
            this.setState({[stateKey]: this.state[stateKey]+" responsive"})
        } else {
            this.setState({[stateKey]: className})
        }
    }

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top primary-font-family">
                <div className="container-fluid">
                    <div className={['row', this.state.navbarRowClassName].join(' ')}>
                        <div><a onClick={this.openNavMenu} href="javascript:void(0);" className="navbar-menu-icon">&#9776;</a></div>
                        <div style={{display:'inline-block'}}>
                            <a href="http://www.idc.ac.il">
                                <img src="https://www.marshall.usc.edu/sites/default/files/inline-images/Interdisciplinary-Center-Herzliya-Logo.jpg" height="81em"/>
                            </a>
                        </div>
                        <div className={this.state.navbarImageDivClassName}>
                            <a href="/" className="navbar-logo-href">
                                <img src={require('../../../public/logo.png')} height="70vw" style={{'marginLeft':'16px'}}/>
                            </a>
                        </div>
                        <ul className={this.state.topNavbarMenuClassName}>
                            <li className="navbar-menu-items-li">
                                <NavbarLink text="About" link="/#about" highlighted={this.props.highlighted === 'about'} />
                            </li>
                            <li className="navbar-menu-items-li">
                                <NavbarLink text="The Program" link="/#theprogram" highlighted={this.props.highlighted === 'theprogram'} />
                            </li>
                            <li className="navbar-menu-items-li">
                                <NavbarLink text="Apply" link="/#apply" highlighted={this.props.highlighted === 'apply'} />
                            </li>
                            {/*<li className="navbar-menu-items-li">
                                <NavbarLink text="Documents" link="/docs" highlighted={this.props.highlighted === 'docs'} />
                            </li>*/}
                            <li className="navbar-menu-items-li">
                                <NavbarLink text="Team" link="/team" highlighted={this.props.highlighted === 'team'} />
                            </li>
                            <li className="navbar-menu-items-li">
                                <NavbarLink text="FAQ" link="/contactus" highlighted={this.props.highlighted === 'email'} />
                            </li>
                            <li className="navbar-menu-items-li">
                                <NavbarLink text="" fontawesome="fa fa-facebook" link="https://www.facebook.com/ISCAorg/" highlighted={this.props.highlighted === 'facebook'} />
                            </li>
                            <li className="navbar-menu-items-li">
                                <NavbarLink text="" fontawesome="fa fa-twitter" link="https://twitter.com/ISCAorg?lang=eng" highlighted={this.props.highlighted === 'twitter'} />
                            </li>
                            <li className="navbar-menu-items-li">
                                <NavbarLink text="" fontawesome="fa fa-instagram" link="https://www.instagram.com/isca_org/" highlighted={this.props.highlighted === 'instagram'} />
                            </li>
                            <li className="navbar-menu-items-li">
                                <NavbarLink text="" fontawesome="fa fa-envelope" link="/contactus" highlighted={this.props.highlighted === 'email'} />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

NavBar.propTypes = {
    highlighted: React.PropTypes.string.isRequired,
};

export default NavBar;