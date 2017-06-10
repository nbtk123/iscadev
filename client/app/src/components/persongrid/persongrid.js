import React, { Component, PropTypes } from 'react';
import Person from './person.js';
import AddPersonBtn from './addpersonbtn.js'
import './persongrid.css';

class PersonGrid extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        var className = 'col-md-' + 12/this.props.howMuchInLine;

        return (
            <div className="container-fluid persons-container right">
                <div className="row">
                    {
                        this.props.persons.map((person, i) => {
                            return (
                                <div className={className} key={i} style={{'marginTop':'3em'}}>
                                    <Person {...person} isEdit={this.props.isEdit}/>
                                </div>
                            );
                        })
                    }
                    {
                        this.props.isEdit && 
                            (
                                <AddPersonBtn onClick={this.props.onAddPersonClicked}/>
                            )
                    }
                </div>
            </div>
        );
    }
}

PersonGrid.propTypes = {
    persons: React.PropTypes.array.isRequired,
    howMuchInLine: React.PropTypes.string.isRequired,
    // isEdit: React.PropTypes.bool.isRequired,
    // onAddPersonClicked: React.PropTypes.func.isRequired,
};

export default PersonGrid;