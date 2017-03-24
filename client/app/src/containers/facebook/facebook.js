import React, { Component, PropTypes } from 'react';
import FacebookProvider, { Page } from 'react-facebook'; // https://github.com/CherryProjects/react-facebook
import './facebook.css';

class ISCAFacebook extends Component {
    render() {
        return (
            <div>
                <div className="facebook-container">
                    <FacebookProvider appID="265640300528421">
                        <Page href="https://www.facebook.com/ISCAorg/"
                            width="500"
                            height="700"
                            hideCover="true"
                            adaptContainerWidth="true"
                            smallHeader="true"
                            showFacepile="false"/>
                    </FacebookProvider>
                </div>
            </div>
        );
    }
}

ISCAFacebook.propTypes = {

};

export default ISCAFacebook;