import React, { Component, PropTypes } from 'react';
import Question from './question.js';

class QuestionList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {
                    question: "Can I join the program if I'm a student at another institution?",
                    answer: "The academic program operates exclusively at IDC Herzliya and is due to expand to other universities during 2018. Until then, orientation for our scholarship program is open to any institution that is approved by the Council for Higher Education. If you wish to apply, please contact the National Union of Israeli Students <a href=\"http://www.nuis.co.il/%D7%A6%D7%A8%D7%95-%D7%A7%D7%A9%D7%A8-2/\">here</a>."
                },
                {
                    question: "How do I know if i’m a good fit for the program?",
                    answer: "We are looking for people of many talents - specifically language speakers, social media experts, web developers, designers (photoshop etc.), video editors and writers. If you think you fall into any of these categories we invite you to apply for the program. If you think there are other ways you can contribute but you are not sure - please contact us."
                },
                {
                    question: "I already have all my academic credits - I just want to volunteer. Is this possible?",
                    answer: "Absolutely, ISCA has hundreds of volunteers worldwide who join our cause because they find it important. You can join the academic program (including all lectures) by committing to at least 40 volunteer hours throughout the year. Volunteers are also eligible to apply for our scholarship program once the year ends."
                },
                {
                    question: "I am a graduate student (MBA, LLM etc), can I join and receive academic credits?",
                    answer: "Unfortunately, we do not offer academic credits for graduate students at this time, but you are more than welcome to volunteer. "
                },
                {
                    question: "Do I really get to work from home? How do we keep in touch?",
                    answer: "ISCA allows for full flexibility with your volunteering hours by allowing you to work from home. BUT, this doesn't mean you can slack off :) We keep in touch all the time through social media, professional meetups (for some teams) and occasional get togethers for lectures (or just to have fun). Your team and team lead will be working closely, even if you don’t see eachother often. We also ask for monthly reports which are used to educate our partnering organizations inform us of your volunteering hours."
                },
                {
                    question: "How practical is the program?",
                    answer: "Although we offer extensive academic development - this program is here to make a difference. Most of your time will be dedicated to actively work in your team and gain “in field” advocacy experience."
                },
                {
                    question: "What is a Personal Project?",
                    answer: "Throughout the program, 20% of your time will be dedicated to a personal project in the field of advocacy. Students in the program have created educational videos, workshops, web applications and more, all dedicated to fighting hate online. The personal project is done in small teams and students have a free hand in choosing what they wish to do."
                },
                {
                    question: "How do I get a scholarship?",
                    answer: "Students who have successfully finished the program and received 2 academic credits are eligible to join our scholarship program and receive a yearly amount of 6000 NIS for their efforts."
                },
                {
                    question: "When do you interview?",
                    answer: "Interviews are usually done mid to end of November."
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