import React, { Component, PropTypes } from 'react';
import Person from './person.js';
import './persongrid.css';

class PersonGrid extends Component {

    render() {
        const className = 'col-xs-' + 12/this.props.howMuchInLine;
        console.log(className);
        return (
            <div className="container-fluid persons-container">
                <div className="row">
                    {
                        this.props.persons.map((person, i) => {
                            return (
                                <div className={className} key={i}>
                                    <Person {...person}/>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

PersonGrid.propTypes = {
    persons: React.PropTypes.array.isRequired,
    howMuchInLine: React.PropTypes.string.isRequired
};

export default PersonGrid;