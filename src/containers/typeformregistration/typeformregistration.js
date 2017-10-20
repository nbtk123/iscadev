import React, { Component } from 'react';

class TypeformRegistration extends Component {
  render() {
    return (
      <div className="container-fluid secondary-bg-color typeform-registration-container">
        <div className="col-md-12" style={{'padding':'0em'}}>
          <div className="typeform-widget" style={{'width': '100%', 'height': '500px'}} data-url="https://iscaidc.typeform.com/to/Vs4qwM" >
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