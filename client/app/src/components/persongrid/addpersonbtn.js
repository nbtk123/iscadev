import React, { Component, PropTypes } from 'react';

class AddPersonBtn extends Component {
    render() {
        return (
            <div onClick={this.props.onClick}>
                Add Person
            </div>
        );
    }
}

AddPersonBtn.propTypes = {
    onClick: React.PropTypes.func.isRequired
};

export default AddPersonBtn;