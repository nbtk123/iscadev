import React, { Component, PropTypes } from 'react';
import './about.css';

class About extends Component {
    render() {
        return (
            <div className="about primary-bg-color primary-text-color">
                <h2>About Us</h2><br/>
                <h3>
                    <p>Israeli Students Combating Antisemetism (ISCA) is one of the world's leading initiatives for combating antisemitism, Holocaust denial & racism online, designed with the National Union of Israeli Students and the Israeli Ministry of Foreign Affairs. The program trains excelling students to monitor and respond to racist materials distributed online in exchange for academic credits or a scholarship. ISCA is a member of the International Network Against Cyber Hate (INACH) and takes an active role in shaping a civil discourse online together with NGO's and human rights organizations.</p>
                    <br/>
                    <p>The academic program accepts students from all faculties at IDC Herzliya, who are highly motivated to tackle antisemitism, have a good understanding of online media and possess the ability to work independently.</p>
                </h3>
            </div>
        );
    }
}

About.propTypes = {
};

export default About;