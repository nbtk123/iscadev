import React, { Component } from 'react';
import Slider from 'react-slick';

import './partnerspager.css';

class PartnersPager extends Component {
  
  constructor(props) {
    super(props);
    this.pageNext = this.pageNext.bind(this);
    this.pagePrev = this.pagePrev.bind(this);
  }

  pageNext() {
    this.slider.slickNext();
  }

  pagePrev() {
    this.slider.slickPrev();
  }

  componentDidMount() {
    window.setInterval(() => {
      this.pageNext();
    }, 3000);
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: false,
      autoplaySpeed: 3000,
      pauseOnHover: false,
    };

    return (
      <div className="partners-pager-container">
        <Slider ref={node => this.slider = node} {...settings} className="partners-pager">
          {
            // There are 21 images in 'public/partners' folder
            Array.apply(null, Array(21)).map(function (_, i) {
              return (
                // No choice to have the style here, because 'Slider' overrides if in css file.
                <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'25em'}}>
                  <img className="partners-pager-image" src={require('../../../public/partners/'+(i+1)+'.png')}/>
                </div>
                )
            })
          }
        </Slider>
      </div>
    );
  }
}

export default PartnersPager;