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
              name : "Gabriela Rolnik",
              job : "Wikipedia Team",
              about : "During the two years that I volunteered at ISCA, I was able to influence people's knowledge about Jewish culture, history and heritage. If you know foreign languages and want to make a real change in foreign societies, ISCA offers multiple opportunities to do so. "
            },
            {
              imgsrc : require('../../../public/testimonies/maya_ben_aris.png'),
              videoUrl : "https://www.youtube.com/embed/XGSy3_Czz8k",
              name : "Maya Ben Aris",
              job : "Social Media Team",
              about : "As a 3rd generation to holocaust survivors I couldn't be happier that this program exists. I got accepted as a freshman and this will be my third year of volunteering. ISCA exposed me to that part of the internet we all need to see. Each racist post we take down or bill we manage to pass gives me tremendous satisfaction."
            },
            {
              imgsrc : require('../../../public/testimonies/nir_barzilay.png'),
              videoUrl : "https://www.youtube.com/embed/XGSy3_Czz8k",
              name : "Nir Barzilay",
              job : "Tech Lead",
              about : "You have a wonderful opportunity to use your skills for a good cause and give back to the community."
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