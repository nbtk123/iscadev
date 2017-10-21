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

    componentDidMount() {
        // Trying to hide the typeform ugly scrollbar, the pre-HTML5 way.
        // Still widely supported unfortunately.
        var timer = setInterval(() => {
            var iframe = document.getElementsByTagName("iframe")[0];
            if (iframe) {
                iframe.setAttribute("scrolling","no");
                clearInterval(timer)
            }
        }, 1000)
    }

    render() {
        return (
                <div className="container-fluid contactus" style={{'marginTop':'7.25em'}}>
                    <div className="row secondary-text-color">
                        <h1 className="col-md-12 title">Contact Us</h1>
                    </div>
                    <h2 className="row primary-text-color" style={{'textAlign':'center'}}>FAQ</h2>
                    
                    <div className="row">
                        <QuestionList />
                    </div>

                    {/* <hr className="faq-seperator"/> */}
                
                    <div className="row secondary-bg-color contactus-typeform-container" id="typeform-container">
                        <div className="typeform-widget" data-url="https://iscaidc.typeform.com/to/p8O69L" style={{width: '60em', height: '600px', 'padding':'0', 'margin':'auto'}} >
                        </div>
                        <script> {
                            (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()
                            }
                        </script>
                    </div>
                    
                    <div className="row contactus-location-text primary-font-family primary-text-color">
                        Interdisciplinary Center (IDC) Herzliya | Community Programs | Israeli Students Combating Antisemetism  
                        <br/>P.O.Box 167, Herzliya 4610101, Israel | www.isca.idc.ac.il | isca@idc.ac.il
                    </div>

                    <div className="row contactus-location-map">
                        <img src={require("../../../public/idc_map.png")}/>
                    </div>
                </div>
        );
    }
}

ContactUs.propTypes = {

};

export default ContactUs;