import React, { Component } from 'react';

import './typeformregistration.css';

class TypeformRegistration extends Component {

  componentDidMount() {
    var timer = setInterval(() => {
      var iframe = document.getElementById("typeform-registration-container").getElementsByTagName("iframe")[0];
      if (iframe) {
          iframe.setAttribute("scrolling","no");
          clearInterval(timer);
      }
    }, 1000)
  }

  render() {
    return (
      <div className="container-fluid secondary-bg-color typeform-registration-container" id="typeform-registration-container">
        <div className="col-md-12" style={{'padding':'0em'}}>
          <div className="typeform-widget" style={{'width': '70em', 'height': '600px', margin:'auto'}} data-url="https://iscaidc.typeform.com/to/Vs4qwM" >
          </div>
          <script>
            {
              (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()
            }
          </script>
        </div>
      </div>
    );
  }
}

export default TypeformRegistration;