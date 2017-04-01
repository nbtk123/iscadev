import React, { Component, PropTypes } from 'react';
import PageButton from '../../components/pagebutton/pagebutton.js';
import './contactus.css';

class ContactUs extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailOnChange = this.handleEmailOnChange.bind(this);
        this.handleNameOnChange = this.handleNameOnChange.bind(this);

        this.state = {
            name: '',
            email: '',
            message: '',
        }
    }

    handleSubmit(event) {
        
        //TODO: send form to API

        this.setState({
            name: '',
            email: '',
            message: '',
        });
    }

    handleNameOnChange(event) {
        this.setState({name: event.target.value});
    }

    handleEmailOnChange(event) {
        this.setState({email: event.target.value});
    }

    handleMessageOnChange(event) {
        this.setState({message: event.target.value});
    }

    render() {
        return (
            <form>
                <div className="container" style={{'marginTop':'6em', 'marginBottom':'8em'}}>
                    <div className="row secondary-text-color">
                        <h1>יצירת קשר</h1>
                    </div>
                    <div className="row" style={{'marginTop':'2em'}} dir="rtl">
                        <div className="col-xs-4 col-xs-offset-4 form-group">
                            <input type="text" value={this.state.name} onChange={this.handleNameOnChange} placeholder="שם" className="form-control secondary-font-family"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4 col-xs-offset-4 form-group">
                            <input type="text" value={this.state.email} onChange={this.handleEmailOnChange} placeholder="your@email.com" className="form-control secondary-font-family"/>
                        </div>
                    </div>
                    <div className="row" dir="rtl">
                        <div className="col-xs-4 col-xs-offset-4 form-group">
                            <textarea rows="10" value={this.state.message} onChange={this.handleMessageOnChange} placeholder="הודעה" className="form-control secondary-font-family"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-5">
                            <PageButton text="שלח/י" onClick={(e) => this.handleSubmit(e)}/>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

ContactUs.propTypes = {

};

export default ContactUs;