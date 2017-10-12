import React, { Component, PropTypes } from 'react';

import './videogriditem.css';

class VideoGridItem extends Component {
  render() {
    return (
      <div className="video-grid-item-container">
        <div className="video-grid-item-images-container">
          <div className="video-grid-item-img-container">
            {/* <iframe width="327" height="181"
              src={this.props.videoUrl}>
            </iframe> */}
            <img className="video-grid-item-img" src={this.props.imgsrc}/>
          </div>
        </div>
        <div className="video-grid-item-text-container">
          <h2 className="video-grid-item-main-text">{this.props.name}</h2>
          <h4>{this.props.about}</h4>
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