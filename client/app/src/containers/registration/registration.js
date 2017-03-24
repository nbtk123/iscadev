import React, { Component, PropTypes } from 'react';
import PageButton from '../../components/pagebutton/pagebutton.js';
import './registration.css';

class Registration extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            id: '',
            message: '',
        }
    }

    handleSubmit(event) {
        
        //TODO: send form to API

        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            id: '',
            message: '',
        });
    }

    handleOnChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        
        console.log([name], value);

        this.setState({[name]: value});
    }

    render() {
        return (
            <form style={{'direction':'rtl'}}>
                <div className="container" style={{'marginTop':'6em', 'marginBottom':'8em'}}>
                    <div className="row secondary-text-color" style={{textAlign:'center'}}>
                        <h1>טופס הרשמה לתכנית ISCA</h1>
                    </div>
                    <div className="row" style={{'marginTop':'2em'}}>
                        <div className="col-xs-offset-4 col-xs-4 form-group">
                            שם משפחה: <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleOnChange} placeholder="שם משפחה" className="form-control secondary-font-family"/>
                        </div>
                        <div className="col-xs-4 form-group">
                            שם פרטי: <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleOnChange} placeholder="שם פרטי" className="form-control secondary-font-family"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-offset-4 col-xs-4 form-group">
                            תעודת זהות: <input type="text" name="id" value={this.state.id} onChange={this.handleOnChange} placeholder="123456789" className="form-control secondary-font-family" style={{'direction':'ltr'}}/>
                        </div>
                        <div className="col-xs-4 form-group">
                            כתובת מייל: <input type="text" name="email" value={this.state.email} onChange={this.handleOnChange} placeholder="your@email.com" className="form-control secondary-font-family" style={{'direction':'ltr'}}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-offset-4 col-xs-8 form-group">
                            About yourself: <textarea rows="10" value={this.state.message} onChange={this.handleOnChange} placeholder="Your message" className="form-control secondary-font-family"/>
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