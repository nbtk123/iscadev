import React, { Component, PropTypes } from 'react';
import Student from './student.js';
import './studentscontent.css';

class StudentsContent extends Component {
    render() {
        return (
            <div className="container-fluid students-container">
                <div className="row">
                    <div className="col-xs-4">
                        <Student imgsrc="http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg"
                                name="Nir"
                                text="Yolo is good"/>
                    </div>
                    <div className="col-xs-4">
                        <Student imgsrc="http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg"
                                name="Nir"
                                text="Yolo is great"/>
                    </div>
                    <div className="col-xs-4">
                        <Student imgsrc="http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg"
                                name="Nir"
                                text="Yolo is awesome"/>
                    </div>
                </div>
            </div>
        );
    }
}

StudentsContent.propTypes = {

};

export default StudentsContent;