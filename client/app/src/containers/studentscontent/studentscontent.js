import React, { Component, PropTypes } from 'react';
import Student from './student.js';
import './studentscontent.css';

class StudentsContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            students: [
                {
                    name: "Nir",
                    text: "Yolo is good. Yolo is good. Yolo is good. Yolo is good. Yolo is good. Yolo is good.",
                    imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg"
                },
                {
                    name: "Nir",
                    text: "Yolo is great. Yolo is great. Yolo is great. Yolo is great. Yolo is great. Yolo is great.",
                    imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg"
                },
                {
                    name: "Nir",
                    text: "Yolo is awesome. Yolo is awesome. Yolo is awesome. Yolo is awesome. Yolo is awesome. Yolo is awesome.",
                    imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg"
                },
            ]
        }
    }

    render() {
        return (
            <div className="container-fluid students-container">
                <div className="row">
                    {
                        this.state.students.map((student) => {
                            return (
                                <div className="col-xs-4">
                                    <Student {...student}/>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

StudentsContent.propTypes = {

};

export default StudentsContent;