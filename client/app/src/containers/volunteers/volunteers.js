import React, { Component, PropTypes } from 'react';
import PersonGrid from '../../components/persongrid/persongrid';

class Volunteers extends Component {

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
                {
                    name: "Nir",
                    text: "Yolo is awesome. Yolo is awesome. Yolo is awesome. Yolo is awesome. Yolo is awesome. Yolo is awesome.",
                    imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg"
                },
                {
                    name: "Nir",
                    text: "Yolo is awesome. Yolo is awesome. Yolo is awesome. Yolo is awesome. Yolo is awesome. Yolo is awesome.",
                    imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg"
                },
                {
                    name: "Nir",
                    text: "Yolo is awesome. Yolo is awesome. Yolo is awesome. Yolo is awesome. Yolo is awesome. Yolo is awesome.",
                    imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg"
                },
            ],
            alumnis: [
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
                {
                    name: "Nir",
                    text: "Yolo is good. Yolo is good. Yolo is good. Yolo is good. Yolo is good. Yolo is good.",
                    imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg"
                },
            ],
        }
    }

    render() {
        this.props.route.onHighlightChanged({highlighted:'volunteers'});
        return (
            <div className="container-fluid">
                <div className="col-xs-12">
                    <h1>סטודנטים פעילים</h1>
                    <PersonGrid persons={this.state.students} howMuchInLine="4"/>
                    <h1>בוגרים</h1>
                    <PersonGrid persons={this.state.alumnis} howMuchInLine="4"/>
                </div>
            </div>
        );
    }
}

Volunteers.propTypes = {

};

export default Volunteers;