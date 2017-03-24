import React, { Component, PropTypes } from 'react';
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
                        <div className="row" style={{'display':'flex', 'position':'relative', 'paddingBottom':'30em'}}>
                            <div className="col-xs-8" style={{'textAlign':'left'}}>
                                <h1 className="bold">ISCA</h1>
                                <h2 className="secondary-font-family">Israeli Studets Combating Antisemitism</h2>
                            </div>
                            <div style={{'alignSelf':'flex-end'}}>
                                <PageButton text="READ MORE" onClick={(e) => window.location = window.location.origin+'#about'}/>
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