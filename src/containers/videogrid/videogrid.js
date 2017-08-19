import React, { Component, PropTypes } from 'react';
import VideoGridItem from './videogriditem.js'

import './videogrid.css'

class VideoGrid extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos : [
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