import React, { Component, PropTypes } from 'react';
import './navbar.css';
import NavbarLink from './navbarlink.js'

class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top" style={{display:'flex', 'flexDirection':'column', 'justifyContent':'center'}}>
                <div className="container">
                    <div className="row" style={{'display':'flex','justifyContent':'flex-end'}}>
                        <div className="col-xs-2" style={{'marginRight':'auto'}}>LOGO</div>
                        <div className="col-xs-1">
                            <NavbarLink text="About" link="#about" highlighted={this.props.highlighted === 'about'}/>
                        </div>
                        <div className="col-xs-1">
                            <NavbarLink text="Students" link="#students" highlighted={this.props.highlighted === 'students'}/>
                        </div>
                        <div className="col-xs-1">
                            <NavbarLink text="Register" link="#register" highlighted={this.props.highlighted === 'register'}/>
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