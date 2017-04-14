import React, { Component, PropTypes } from 'react';
import './navbar.css';
import NavbarLink from './navbarlink.js'

class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top" style={{display:'flex', 'flexDirection':'column', 'justifyContent':'center'}} dir="ltr">
                <div className="container">
                    <div className="row" style={{'display':'flex','justifyContent':'flex-end'}}>
                        <div className="col-xs-2" style={{'marginRight':'auto'}}>
                            <img src="http://isca-org.com/wp-content/uploads/2014/12/isca-logo.png" height="40em"/>
                        </div>
                        <div className="col-xs-1 navbar-link-container">
                            <NavbarLink text="צרו קשר" link="/#contactus" highlighted={this.props.highlighted === 'contactus'}/>
                        </div>
                        <div className="col-xs-1 navbar-link-container">
                            <NavbarLink text="הרשמה" link="/register" highlighted={this.props.highlighted === 'register'}/>
                        </div>
                        {/*<div className="col-xs-1 navbar-link-container">
                            <NavbarLink text="הצוות" link="/#team" highlighted={this.props.highlighted === 'team'}/>
                        </div>*/}
                        <div className="col-xs-1 navbar-link-container">
                            <NavbarLink text="מסמכים" link="/docs" highlighted={this.props.highlighted === 'docs'}/>
                        </div>
                        <div className="col-xs-1 navbar-link-container">
                            <NavbarLink text="אודותינו" link="/team" highlighted={this.props.highlighted === 'about'}/>
                        </div>
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