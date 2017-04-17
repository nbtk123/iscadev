import React, { Component, PropTypes } from 'react';
import './question.css';

class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {expanded: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({expanded: !this.state.expanded})
    }

    render() {

        var answerStyle = {
            'maxHeight': this.state.expanded ? '500px' : '0',
            'transition': this.state.expanded ? 'max-height 0.3s ease-in' : 'max-height 0.3s ease-out'
        }

        return (
            <div className="col-xs-8 col-xs-offset-2 question-container" onClick={this.handleClick}>
                <h3>{this.props.question}</h3>
                <div className="question-answer" style={answerStyle}>{this.props.answer}</div>
            </div>
        );
    }
}

Question.propTypes = {
    question: React.PropTypes.string.isRequired,
    answer: React.PropTypes.string.isRequired,
};

export default Question;