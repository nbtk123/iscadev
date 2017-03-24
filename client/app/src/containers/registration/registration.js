import React, { Component, PropTypes } from 'react';
import PageButton from '../../components/pagebutton/pagebutton.js';
import './registration.css';

class Registration extends Component {

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
                    <div className="row secondary-text-color" style={{textAlign:'center'}}>
                        <h1>Register</h1>
                    </div>
                    <div className="row" style={{'marginTop':'2em'}}>
                        <div className="col-xs-4 form-group">
                            Your name: <input type="text" value={this.state.name} onChange={this.handleNameOnChange} placeholder="Name" className="form-control secondary-font-family"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4 form-group">
                            Your email: <input type="text" value={this.state.email} onChange={this.handleEmailOnChange} placeholder="your@email.com" className="form-control secondary-font-family"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-8 form-group">
                            About yourself: <textarea rows="10" value={this.state.message} onChange={this.handleMessageOnChange} placeholder="Your message" className="form-control secondary-font-family"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-5">
                            <PageButton text="SUBMIT" onClick={(e) => this.handleSubmit(e)}/>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

Registration.propTypes = {

};

export default Registration;