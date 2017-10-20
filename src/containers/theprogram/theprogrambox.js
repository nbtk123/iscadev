import React, { Component, PropTypes } from 'react';
import './theprogrambox.css';

class TheProgramBox extends Component {

  render() {
    return (
      <div className="theprogrambox-container">
        <h3 className="theprogrambox-title primary-text-color">{this.props.title}</h3>
        <ul>
          {
            this.props.items.map(((item, i) => {
              return (
              <li key={i} className="theprogrambox-li" dangerouslySetInnerHTML={{__html: "<h4>"+item+"</h4>"}}></li>
              )
            }))
          }
        </ul>
      </div>
    );
  }
}

TheProgramBox.propTypes = {
  title: React.PropTypes.string.isRequired,
  items: React.PropTypes.array.isRequired,
};

export default TheProgramBox;