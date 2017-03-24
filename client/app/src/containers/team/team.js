import React, { Component, PropTypes } from 'react';
import TeamMember from './teammember.js';
import './team.css';

class Team extends Component {

    constructor(props) {
        super(props);
        this.state = {
            team: [
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
            <div className="container-fluid team-container">
                <div className="row">
                    {
                        this.state.team.map((member, i) => {
                            return (
                                <div className="col-xs-4" key={i}>
                                    <TeamMember {...member}/>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

Team.propTypes = {

};

export default Team;