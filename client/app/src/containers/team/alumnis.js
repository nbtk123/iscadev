import React, { Component, PropTypes } from 'react';
import PersonGrid from '../../components/persongrid/persongrid';

class Alumnis extends Component {

    constructor(props) {
                super(props);

                this.state = {
                    alumnis: {
                        2017: [
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
                        ],
                        2016: [
                            {
                                name: "יושימיצו אישימוטו",
                                text: "סטודנט למנהל עסקים בבית הספר הבינלאומי, שנה ב'",
                                imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg",
                                iscayear: "2016"
                            },
                            {
                                name: "יושימיצו אישימוטו",
                                text: "סטודנט למנהל עסקים בבית הספר הבינלאומי, שנה ב'",
                                imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg",
                                iscayear: "2016"
                            },
                        ],
                        2015: [
                            {
                                name: "יושימיצו אישימוטו",
                                text: "סטודנט למנהל עסקים בבית הספר הבינלאומי, שנה ב'",
                                imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg",
                                iscayear: "2015"
                            },
                        ]
                    }
                }
            }

    render() {
        return (
            <div className="container-fluid">
                <div className="col-xs-12">
                    {
                        Object.keys(this.state.alumnis).sort().reverse().map((year, i) => {
                            var marginTop = i != 0 ? '5em' : '0';
                            return (
                                <div className="row" key={year + '_' + i} style={{'marginTop':marginTop}}>
                                    <h1>{year}</h1>
                                    {
                                        <PersonGrid persons={this.state.alumnis[year]} howMuchInLine="4" />
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

Alumnis.propTypes = {

};

export default Alumnis;