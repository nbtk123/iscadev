import React, { Component, PropTypes } from 'react';
import './activestudentsmanagers.css'
import PersonGrid from '../../components/persongrid/persongrid';

class ActiveStudentsManagers extends Component {

    constructor(props) {
            super(props);

            this.state = {
                managers: [
                    {
                        name: "רועי מירום",
                        text: "סטודנט למשפטי-מנהל עסקים בבית הספר הישראלי, שנה ג'",
                        imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg",
                        iscayear: "2014",
                        job: "מקים התוכנית"
                    },
                    {
                        name: "רועי מירום",
                        text: "סטודנט למשפטי-מנהל עסקים בבית הספר הישראלי, שנה ג'",
                        imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg",
                        iscayear: "2014",
                        job: "מקים התוכנית"
                    },
                ],
                students: [
                    {
                        name: "יושימיצו אישימוטו",
                        text: "סטודנט למנהל עסקים בבית הספר הבינלאומי, שנה ב'",
                        imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg",
                        iscayear: "2017"
                    },
                    {
                        name: "יושימיצו אישימוטו",
                        text: "סטודנט למנהל עסקים בבית הספר הבינלאומי, שנה ב'",
                        imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg",
                        iscayear: "2017"
                    },
                    {
                        name: "יושימיצו אישימוטו",
                        text: "סטודנט למנהל עסקים בבית הספר הבינלאומי, שנה ב'",
                        imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg",
                        iscayear: "2017"
                    },
                    {
                        name: "יושימיצו אישימוטו",
                        text: "סטודנט למנהל עסקים בבית הספר הבינלאומי, שנה ב'",
                        imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg",
                        iscayear: "2017"
                    },
                    {
                        name: "יושימיצו אישימוטו",
                        text: "סטודנט למנהל עסקים בבית הספר הבינלאומי, שנה ב'",
                        imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg",
                        iscayear: "2017"
                    },
                ]
            }
        }

    render() {
        return (
            <div className="container-fluid" dir="rtl">
                <div className="col-xs-12">
                    <h1>מנהלים</h1>
                    <PersonGrid persons={this.state.managers} howMuchInLine="4" />
                    <h1 style={{'marginTop':'1.5em'}}>סטודנטים פעילים</h1>
                    <PersonGrid persons={this.state.students} howMuchInLine="4" />
                </div>
            </div>
        );
    }
}

ActiveStudentsManagers.propTypes = {

};

export default ActiveStudentsManagers;