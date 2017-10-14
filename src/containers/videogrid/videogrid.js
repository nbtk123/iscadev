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
              name : "Gabriela Rolnik Lisauskaite",
              job : "Wikipedia Lead",
              years : "2015-2016",
              about : "During the two years that I volunteered at ISCA, I was able to influence people's knowledge about Jewish culture, history and heritage. If you know foreign languages and want to make a real change in foreign societies, ISCA offers multiple opportunities to do so. "
            },
            {
              imgsrc : require('../../../public/testimonies/maya_ben_aris.png'),
              videoUrl : "https://www.youtube.com/embed/XGSy3_Czz8k",
              name : "Maya Ben Aris",
              job : "SM Monitoring Team",
              years : "2015-2018",
              about : "As a 3rd generation to holocaust survivors I couldn't be happier that this program exists. I got accepted as a freshman and this will be my third year of volunteering. ISCA exposed me to that part of the internet we all need to see. Each racist post we take down or bill we manage to pass gives me tremendous satisfaction."
            },
            {
              imgsrc : "http://bootcamp.israeltechchallenge.com/images/pic1.jpg",
              videoUrl : "https://www.youtube.com/embed/XGSy3_Czz8k",
              name : "John",
              job : "",
              years : "2015-2016",
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