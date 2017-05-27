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

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false
    };

    return (
      <div className="partners-pager-container">
        <Slider ref={node => this.slider = node} {...settings} className="partners-pager" >
          <div className="partners-pager-image-container"><img className="partners-pager-image" src="https://c.s-microsoft.com/en-us/CMSImages/lrn-share-site-ms-logo.png?version=bf62922f-fda3-d328-e220-b699eac0d6c0"/></div>
          <div className="partners-pager-image-container"><img className="partners-pager-image" src="https://storage.googleapis.com/gweb-uniblog-publish-prod/static/blog/images/google-200x200.7714256da16f.png" /></div>
          <div className="partners-pager-image-container"><img className="partners-pager-image" src="https://img.grouponcdn.com/coupons/dsh9cCJiSizPRWtZH7DRrg/amazon_com-500x500/v1/t200x200.png"/></div>
          <div className="partners-pager-image-container"><img className="partners-pager-image" src="https://crunchbase-production-res.cloudinary.com/image/upload/c_limit,h_600,w_600/v1422480063/h0fvargheeyaybm4oyyt.jpg"/></div>
          <div className="partners-pager-image-container"><img className="partners-pager-image" src="http://www.reporting-focac.com/uploads/2/9/5/7/2957726/7194920_orig.png"/></div>
          <div className="partners-pager-image-container"><img className="partners-pager-image" src="http://www.enterprisetech.com/wp-content/uploads/2015/01/logo_intel.jpg"/></div>
        </Slider>
      </div>
    );
  }
}

export default PartnersPager;