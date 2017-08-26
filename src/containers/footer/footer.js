import React, { Component } from 'react';
import FooterIcon from './footericon.js';

import './footer.css';

class Footer extends Component {

    render() {
        return (
            <div className="container-fluid footer-container">
                <ul className="footer-ul">
                    <li><FooterIcon fontawesome="fa fa-facebook" link="https://www.facebook.com/ISCAorg/" /></li>
                    <li><FooterIcon fontawesome="fa fa-twitter" link="https://twitter.com/ISCAorg?lang=eng" /></li>
                    <li><FooterIcon fontawesome="fa fa-instagram" link="https://www.instagram.com/isca_org/" /></li>
                    <li><FooterIcon fontawesome="fa fa-envelope" link="/contactus" /></li>
                </ul>
            </div>
        );
    }
}

export default Footer;