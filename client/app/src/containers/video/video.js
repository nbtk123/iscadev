import React, { Component, PropTypes } from 'react';
import PubSub from 'pubsub-js';
import * as events from '../../events.js';
import './video.css'
import PageButton from '../../components/pagebutton/pagebutton.js';

class Video extends Component {
    render() {
        return (
            <div className="video-container">
                <video autoPlay loop style={{'width':'100%'}}>
                    <source src="http://bootcamp.israeltechchallenge.com/video/Optimized_video.mp4" type="video/mp4"/>
                </video>
                <div className="video-overlay-text">
                    <div className="container">
                        <div className="row" style={{'display':'flex', 'position':'relative', 'marginBottom':'25vw'}}>
                            <div className="col-md-12" style={{'textAlign':'left'}}>
                                <div className="row">
                                    <h1 className="bold" style={{'marginBottom':'0'}}>
                                        ISCA <span style={{'fontSize':'0.3em', 'fontWeight':'normal'}}>Academic Program</span>
                                    </h1>
                                </div>
                                <div className="row">
                                    <h2 className="secondary-font-family" style={{'marginTop':'0'}}>Israeli Students Combating Antisemitism</h2>
                                </div>
                                <div className="col-md-2" style={{'display':'flex','justifyContent':'center'}}>
                                    <div style={{'alignSelf':'flex-end', 'padding':'0'}}>
                                        <PageButton text="Read More" onClick={(e) => PubSub.publish(events.NAVBAR_LINK_CLICK, '/#about')}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Video.propTypes = {

};

export default Video;