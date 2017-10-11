import React, { Component, PropTypes } from 'react';
import Question from './question.js';

class QuestionList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {
                    question: "Can I join the program if i'm a student at another institution?",
                    answer: "The academic program operates exclusively at IDC Herzliya and is due to expand to other universities during 2018. Until then, orientation for the scholarship program is open to any institution that is approved by the Council for Higher Education. If you wish to apply, please contact the National Union of Israeli Students <a href=\"http://www.nuis.co.il/%D7%A6%D7%A8%D7%95-%D7%A7%D7%A9%D7%A8-2/\">here</a>."
                },
            ]
        }
    }

    render() {  
        return (
            <div className="container">
                <div className="row">
                {
                    this.state.questions.map((question, i) => {
                        return (
                            <Question {...question}/>
                        )
                    })
                }
                </div>
            </div>
        );
    }
}

QuestionList.propTypes = {
    
};

export default QuestionList;