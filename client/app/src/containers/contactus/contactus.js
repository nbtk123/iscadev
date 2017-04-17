import React, { Component, PropTypes } from 'react';
import ContactUsForm from './contactusform.js';
import QuestionList from './questionlist.js';
import './contactus.css';

class ContactUs extends Component {

    componentWillMount() {
        this.props.route.onHighlightChanged({highlighted:'contactus'});
    }

    render() {
        return (
                <div className="container-fluid contactus" style={{'marginTop':'8em', 'marginBottom':'8em'}}>
                    <div className="row secondary-text-color">
                        <h1 className="col-xs-12 title">יצירת קשר</h1>
                    </div>
                    <h2 className="primary-text-color" style={{'textAlign':'center'}}>שאלות נפוצות</h2>
                    <QuestionList />
                    <hr className="faq-seperator"/>
                    <h2 className="primary-text-color" style={{'textAlign':'center'}}>השארת הודעה</h2>
                    <ContactUsForm />
                </div>
        );
    }
}

ContactUs.propTypes = {

};

export default ContactUs;