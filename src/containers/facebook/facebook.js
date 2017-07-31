import React, { Component, PropTypes } from 'react';
import FacebookProvider, { Page } from 'react-facebook'; // https://github.com/CherryProjects/react-facebook
import './facebook.css';

class ISCAFacebook extends Component {

    componentWillMount() {
        this.setState({
            width: window.innerWidth<=800 ? '400' : '500',
            height: window.innerWidth<=800 ? '460' : '540',
        });
    }

    render() {
        return (
            <div>
                <div className="facebook-container">
                    <FacebookProvider appID="265640300528421">
                        <Page href="https://www.facebook.com/ISCAorg/"
                            width={this.state.width}
                            height={this.state.height}
                            hideCover={true}
                            smallHeader={true}
                            showFacepile={false}/>
                    </FacebookProvider>
                </div>
            </div>
        );
    }
}

ISCAFacebook.propTypes = {

};

export default ISCAFacebook;