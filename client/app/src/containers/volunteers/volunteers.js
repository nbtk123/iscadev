import React, { Component, PropTypes } from 'react';
import PersonGrid from '../../components/persongrid/persongrid';

class Volunteers extends Component {

    constructor(props) {
        super(props);

        this.onAddStudentClicked = this.onAddStudentClicked.bind(this);
        this.onAddAlumniClicked = this.onAddAlumniClicked.bind(this);

        this.state = {
            students: [
                {
                    name: "יושימיצו",
                    text: "סטודנט בבינלאומי שהולך עם חרב סמוראי צמודה",
                    imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg"
                },
                {
                    name: "יושימיצו",
                    text: "סטודנט בבינלאומי שהולך עם חרב סמוראי צמודה",
                    imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg"
                },
                {
                    name: "יושימיצו",
                    text: "סטודנט בבינלאומי שהולך עם חרב סמוראי צמודה",
                    imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg"
                },
                {
                    name: "יושימיצו",
                    text: "סטודנט בבינלאומי שהולך עם חרב סמוראי צמודה",
                    imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg"
                },
                {
                    name: "יושימיצו",
                    text: "סטודנט בבינלאומי שהולך עם חרב סמוראי צמודה",
                    imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg"
                },
            ],
            alumnis: [
                {
                    name: "יושימיצו",
                    text: "סטודנט בבינלאומי שהולך עם חרב סמוראי צמודה",
                    imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg"
                },{
                    name: "יושימיצו",
                    text: "סטודנט בבינלאומי שהולך עם חרב סמוראי צמודה",
                    imgsrc: "http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg"
                },
            ],
        }
    }

    componentWillMount() {
        this.props.route.onHighlightChanged({highlighted:'volunteers'});
    }

    onAddStudentClicked(event) {
        var students = [...this.state.students, {
            imgsrc: "",
            name: "",
            text: ""
        }];
        
        this.setState({students: students   });
    }

    onAddAlumniClicked(event) {
        var alumnis = [...this.state.alumnis, {
            imgsrc: "",
            name: "",
            text: ""
        }];
        
        this.setState({alumnis: alumnis   });
    }

    render() {

        const isEdit = this.props.route.path === '/volunteers/edit'

        return (
            <div className="container-fluid" dir="rtl">
                <div className="col-xs-12">
                    <h1>סטודנטים פעילים</h1>
                    <PersonGrid persons={this.state.students} howMuchInLine="4" isEdit={isEdit} onAddPersonClicked={this.onAddStudentClicked}/>
                    <h1>בוגרים</h1>
                    <PersonGrid persons={this.state.alumnis} howMuchInLine="4" isEdit={isEdit} onAddPersonClicked={this.onAddAlumniClicked}/>
                </div>
            </div>
        );
    }
}

Volunteers.propTypes = {

};

export default Volunteers;