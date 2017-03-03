import React, { Component, PropTypes } from 'react';
import PageButton from '../../components/pagebutton/pagebutton.js';
import './registration.css';

class Registration extends Component {
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="container" style={{'marginTop':'2em', 'marginBottom':'5em'}}>
                    <div className="row secondary-text-color">
                        <h1>Join the fight!</h1>
                    </div>
                    <div className="row" style={{'marginTop':'2em'}}>
                        <div className="col-xs-4 col-xs-offset-4 form-group">
                            <input type="text" placeholder="Name" className="form-control secondary-font-family"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4 col-xs-offset-4 form-group">
                            <input type="text" placeholder="your@email.com" className="form-control secondary-font-family"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-5">
                            <PageButton text="SUBMIT"/>
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