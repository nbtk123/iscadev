import React, { Component, PropTypes } from 'react';
import './navbar.css';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top" style={{display:'flex', 'flexDirection':'column', 'justifyContent':'center'}}>
                <div className="container">
                    <div className="row" style={{'display':'flex','justifyContent':'flex-end'}}>
                        <div className="col-xs-2" style={{'marginRight':'auto'}}>LOGO</div>
                        <div className="col-xs-1"><a href="#about" className="navbar-link">About</a></div>
                        <div className="col-xs-1"><a href="#students" className="navbar-link">Students</a></div>
                        <div className="col-xs-1"><a href="#register" className="navbar-link">Register</a></div>
                    </div>
                </div>
            </nav>
        );
    }
}

NavBar.propTypes = {

};

export default NavBar;