import React, { Component, PropTypes } from 'react';
import ContactUsForm from './contactusform.js';
import QuestionList from './questionlist.js';
import './contactus.css';

import PubSub from 'pubsub-js';
import * as events from '../../events.js';

class ContactUs extends Component {

    componentWillMount() {
        this.TOKEN_NAVBAR_LINK_CLICK = PubSub.subscribe(events.NAVBAR_LINK_CLICK, this.onNavbarLinkClick);
        this.props.route.onHighlightChanged({highlighted:'contactus'});
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.TOKEN_NAVBAR_LINK_CLICK);
    }

    onNavbarLinkClick(topic, link) {
        if (link.startsWith('/')) {
            window.location = window.location.origin + link;
        } else {
            window.location = link;
        }
    }

    render() {
        return (
                <div className="container-fluid contactus" style={{'marginTop':'7.25em', 'marginBottom':'8em'}}>
                    <div className="row secondary-text-color">
                        <h1 className="col-xs-12 title">Contact Us</h1>
                    </div>
                    <h2 className="primary-text-color" style={{'textAlign':'center'}}>FAQ</h2>
                    <QuestionList />
                    <hr className="faq-seperator"/>
                    <h2 className="primary-text-color" style={{'textAlign':'center'}}>Leave a message</h2>
                    <ContactUsForm />
                </div>
        );
    }
}

ContactUs.propTypes = {

};

export default ContactUs;