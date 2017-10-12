import React, { Component, PropTypes } from 'react';
import VideoGridItem from './videogriditem.js'

import './videogrid.css'

class VideoGrid extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos : [
            {
              imgsrc : require('../../../public/testimonies/gabi.jpg'),
              videoUrl : "https://www.youtube.com/embed/XGSy3_Czz8k",
              name : "Gabbi",
              about : "During the two years that I volunteered at ISCA, I was able to influence people's knowledge about Jewish culture, history and heritage. If you know foreign languages and want to make a real change in foreign societies, ISCA offers multiple opportunities to do so. "
            },
            {
              imgsrc : "http://bootcamp.israeltechchallenge.com/images/pic1.jpg",
              videoUrl : "https://www.youtube.com/embed/XGSy3_Czz8k",
              name : "John",
              about : "Neruoscience & Techonology, Brandeis Univeristy, United States"
            },
            {
              imgsrc : "http://bootcamp.israeltechchallenge.com/images/pic1.jpg",
              videoUrl : "https://www.youtube.com/embed/XGSy3_Czz8k",
              name : "John",
              about : "Neruoscience & Techonology, Brandeis Univeristy, United States"
            }
      ]
    }
  }

  render() {
    return (
      <div className="container-fluid video-grid-container secondary-text-color secondary-bg-color">
        <div className="row">
          {
            this.state.videos.map(function (video, i) {
              return (
                <div className="col-md-4 video-grid-center-content" key={i}>
                  <VideoGridItem {...video}/>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

VideoGrid.propTypes = {
  
};

export default VideoGrid;