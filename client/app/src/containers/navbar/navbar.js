import React, { Component, PropTypes } from 'react';
import './navbar.css';
import NavbarLink from './navbarlink.js'

class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top primary-font-family" style={{display:'flex', 'flexDirection':'column', 'justifyContent':'center'}}>
                <div className="container">
                    <div className="row" style={{'display':'flex','justifyContent':'flex-end'}}>
                        <div className="col-xs-2" style={{'marginRight':'auto'}}>
                            <img src="http://isca-org.com/wp-content/uploads/2014/12/isca-logo.png" height="40em"/>
                        </div>

                        <ul className="navbar-menu-items-ul">
                            <li className="navbar-menu-items-li">
                                <NavbarLink text="Contact Us" link="/contactus" highlighted={this.props.highlighted === 'contactus'}/>
                            </li>
                            <li className="navbar-menu-items-li">
                                <NavbarLink text="Registration" link="/register" highlighted={this.props.highlighted === 'register'}/>
                            </li>
                            <li className="navbar-menu-items-li">
                                <NavbarLink text="Documents" link="/docs" highlighted={this.props.highlighted === 'docs'}/>
                            </li>
                            <li className="navbar-menu-items-li">
                                <NavbarLink text="Team" link="/team" highlighted={this.props.highlighted === 'team'}/>
                            </li>
                            <li className="navbar-menu-items-li">
                                <NavbarLink text="" fontawesome="fa fa-facebook" link="http://www.facebook.com" highlighted={this.props.highlighted === 'facebook'}/>
                            </li>
                            <li className="navbar-menu-items-li">
                                <NavbarLink text="" fontawesome="fa fa-twitter" link="http://www.twitter.com" highlighted={this.props.highlighted === 'twitter'}/>
                            </li>
                            <li className="navbar-menu-items-li">
                                <NavbarLink text="" fontawesome="fa fa-instagram" link="http://www.instagram.com" highlighted={this.props.highlighted === 'instagram'}/>
                            </li>
                            <li className="navbar-menu-items-li">
                                <NavbarLink text="" fontawesome="fa fa-envelope" link="http://www.gmail.com" highlighted={this.props.highlighted === 'email'}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

NavBar.propTypes = {
    highlighted: React.PropTypes.string.isRequired
};

export default NavBar;