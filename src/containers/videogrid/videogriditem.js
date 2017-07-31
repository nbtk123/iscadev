import React, { Component, PropTypes } from 'react';

import './videogriditem.css';

class VideoGridItem extends Component {
  render() {
    return (
      <div className="video-grid-item-container">
        <div className="video-grid-item-images-container">
          <div className="video-grid-item-img-container">
            <img src={this.props.imgsrc}/>
          </div>
          <div className="video-grid-item-play-icon-container">
            <img  className="video-grid-item-play-icon-img"
                  src="https://img.clipartfest.com/28ba86a53fd808aa397b21f1d2e2acb1_play-icon-transparent-play-icon-clipart-transparent-background_300-169.png"/>
          </div>
        </div>
        <div className="video-grid-item-text-container">
          <h2 className="video-grid-item-main-text">{this.props.name}</h2>
          <h3>{this.props.about}</h3>
        </div>
      </div>
    );
  }
}

VideoGridItem.propTypes = {
  imgsrc: React.PropTypes.string.isRequired,
  videoUrl: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  about: React.PropTypes.string.isRequired,
};

export default VideoGridItem;