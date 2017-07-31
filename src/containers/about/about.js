import React, { Component, PropTypes } from 'react';
import './about.css';

class About extends Component {
    render() {
        return (
            <div className="about primary-bg-color primary-text-color">
                <h3><p>Cooperating with Israel’s Ministry of Foreign Affairs and The National Union of Israeli
Students, The program allows students to take an active part against online
antisemitism, racism and holocaust denial.</p>

<p>The program accepts students from all faculties (Hebrew speakers only), who are highly
motivated to tackle anti-Semitism, have a good understanding of online media and
possess the ability to work independently.</p>

<p>For additional details:<br/>
Adi Goldstein, Program coordinator – isca@idc.ac.il<br/>
Roy Meirom, Program Director – roy.meirom@idc.ac.il</p></h3>
            </div>
        );
    }
}

About.propTypes = {
};

export default About;