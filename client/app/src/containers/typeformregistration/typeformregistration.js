import React, { Component } from 'react';

class TypeformRegistration extends Component {
  render() {
    return (
      <div className="container-fluid secondary-bg-color">
        <div className="col-xs-6 col-xs-offset-3" style={{'marginTop':'5em', 'marginBottom':'3em'}}>
          <div className="typeform-widget" style={{'width': '100%', 'height': '40em'}} data-url="https://iscadev.typeform.com/to/lUaGar" >
          </div>
          <script>
            {
              (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()
            }
          </script>
          <div>
            powered by <a href="https://www.typeform.com/examples/forms/registration-form-template/?utm_campaign=lUaGar&amp;utm_source=typeform.com-8482275-Basic&amp;utm_medium=typeform&amp;utm_content=typeform-embedded-registrationform&amp;utm_term=EN" style={{'color': '#999'}} target="_blank">Typeform</a>
          </div>
        </div>
      </div>
    );
  }
}

export default TypeformRegistration;