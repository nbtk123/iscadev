import React, { Component } from 'react';
import PageButton from '../../components/pagebutton/pagebutton.js';

class ContactUsForm extends Component {

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
            <div>
                <form>
                        <div className="row" style={{'marginTop':'2em'}}>
                            <div className="col-xs-4 col-xs-offset-4 form-group">
                                <input type="text" value={this.state.name} onChange={this.handleNameOnChange} placeholder="Name" className="form-control secondary-font-family"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-4 col-xs-offset-4 form-group">
                                <input type="text" value={this.state.email} onChange={this.handleEmailOnChange} placeholder="your@email.com" className="form-control secondary-font-family"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-4 col-xs-offset-4 form-group">
                                <textarea rows="10" value={this.state.message} onChange={this.handleMessageOnChange} placeholder="Message" className="form-control secondary-font-family"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2 col-xs-offset-5">
                                <PageButton text="Submit" onClick={(e) => this.handleSubmit(e)}/>
                            </div>
                        </div>
                    </form>
            </div>
        );
    }
}

export default ContactUsForm;