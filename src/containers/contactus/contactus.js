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
                        <h1 className="col-md-12 title">Contact Us</h1>
                    </div>
                    <h2 className="primary-text-color" style={{'textAlign':'center'}}>FAQ</h2>
                    <QuestionList />
                    <hr className="faq-seperator"/>
                    {/*<h2 className="primary-text-color" style={{'textAlign':'center'}}>Leave a message</h2>
                    <ContactUsForm />*/}

                    <div className="typeform-widget" data-url="https://iscadev.typeform.com/to/mDfesN" style={{width: '100%', height: '500px'}} >
                    </div>
                    <script> {
                        (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()
                        }
                    </script>
                    <div style={{fontFamily: 'Sans-Serif', fontSize: '12px', color: '#999', opacity: '0.5', paddingTop: '5px'}} > powered by <a href="https://www.typeform.com/examples/forms/contact-form-template/?utm_campaign=mDfesN&amp;utm_source=typeform.com-8482275-Basic&amp;utm_medium=typeform&amp;utm_content=typeform-embedded-contactform&amp;utm_term=EN" style={{color: '#999'}} target="_blank">Typeform</a> </div>
                        
                </div>
        );
    }
}

ContactUs.propTypes = {

};

export default ContactUs;