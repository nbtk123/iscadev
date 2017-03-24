import React, { Component, PropTypes } from 'react';
import PageButton from '../../components/pagebutton/pagebutton.js';
import './registration.css';

class Registration extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            id: '',
            birthdate: '',
            phone: '',
            sex: '',
            degreeType: '',
            study: '',
            languages: '',
            whyisca: '',
            wannabemanager: '',
            essayTopic: '',
            essay: '',
            howheard: '',
        }
    }

    handleSubmit(event) {
        
        //TODO: send form to API

        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            id: '',
            birthdate: '',
            phone: '',
            sex: '',
            degreeType: '',
            study: '',
            languages: '',
            whyisca: '',
            wannabemanager: '',
            essayTopic: '',
            essay: '',
            howheard: '',
        });
    }

    handleOnChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        
        console.log([name], value);

        this.setState({[name]: value});
    }

    render() {
        return (
            <form style={{'direction':'rtl'}}>
                <div className="container" style={{'marginTop':'6em', 'marginBottom':'8em'}}>
                    <div className="row secondary-text-color" style={{textAlign:'center'}}>
                        <h1>טופס הרשמה לתכנית ISCA</h1>
                    </div>
                    <div className="row" style={{'marginTop':'2em'}}>
                        <div className="col-xs-offset-4 col-xs-4 form-group">
                            <h3>שם משפחה:</h3>
                            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleOnChange} placeholder="שם משפחה" className="form-control secondary-font-family"/>
                        </div>
                        <div className="col-xs-4 form-group">
                            <h3>שם פרטי:</h3>
                            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleOnChange} placeholder="שם פרטי" className="form-control secondary-font-family"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-offset-4 col-xs-4 form-group">
                            <h3>תעודת זהות:</h3>
                            <input type="text" name="id" value={this.state.id} onChange={this.handleOnChange} placeholder="123456789" className="form-control secondary-font-family" style={{'direction':'ltr'}}/>
                        </div>
                        <div className="col-xs-4 form-group">
                            <h3>כתובת מייל:</h3>
                            <input type="text" name="email" value={this.state.email} onChange={this.handleOnChange} placeholder="your@email.com" className="form-control secondary-font-family" style={{'direction':'ltr'}}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-offset-4 col-xs-4 form-group">
                            <h3>תאריך לידה:</h3>
                            <input type="date" name="birthdate" value={this.state.birthdate} onChange={this.handleOnChange} className="form-control secondary-font-family"/>
                        </div>
                        <div className="col-xs-4 form-group">
                            <h3>מס' טלפון: </h3>
                            <input type="text" name="phone" value={this.state.phone} onChange={this.handleOnChange} className="form-control secondary-font-family" style={{'direction':'ltr'}}/>
                        </div>
                    </div>
                    <div className="row" style={{'marginBottom':'1em'}}>
                        <div className="col-xs-offset-10 col-xs-2" style={{'display':'inline-block'}}>
                            <h3>מין:</h3>
                            <input type="radio" name="sex" value="male" onChange={this.handleOnChange} /> זכר
                            <input type="radio" name="sex" value="female" onChange={this.handleOnChange} style={{'marginRight':'1em'}}/> נקבה
                        </div>
                    </div>
                    <div className="row" style={{'marginBottom':'1em'}}>
                        <div className="col-xs-offset-10 col-xs-2" style={{'display':'inline-block'}}>
                            <h3>סוג התואר:</h3>
                            <input type="radio" name="degreeType" value="first" onChange={this.handleOnChange} /> תואר ראשון
                            <input type="radio" name="degreeType" value="second" onChange={this.handleOnChange} style={{'marginRight':'1em'}}/> תואר שני
                        </div>
                    </div>
                    <div className="row" style={{'marginBottom':'1em'}}>
                        <div className="col-xs-offset-9 col-xs-3" style={{'display':'inline-block'}}>
                            <h3>שנת לימוד:</h3>
                            <input type="radio" name="year" value="first" onChange={this.handleOnChange} /> ראשונה
                            <input type="radio" name="year" value="second" onChange={this.handleOnChange} style={{'marginRight':'1em'}}/> שניה
                            <input type="radio" name="year" value="third" onChange={this.handleOnChange} style={{'marginRight':'1em'}}/> שלישית
                            <input type="radio" name="year" value="forth" onChange={this.handleOnChange} style={{'marginRight':'1em'}}/> רביעית
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-offset-8 col-xs-4 form-group">
                            <h3>תחום/י לימוד:</h3>
                            <input type="text" name="study" value={this.state.study} onChange={this.handleOnChange} className="form-control secondary-font-family"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-offset-8 col-xs-4 form-group">
                            <h3>שפות זרות (מלבד עברית) בהן את/ה שולט/ת ברמה גבוהה:</h3>
                            <input type="text" name="languages" value={this.state.languages} onChange={this.handleOnChange} className="form-control secondary-font-family"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-offset-6 col-xs-6 form-group">
                            <h3>תארי/י בקצרה כיצד נושא האנטישמיות נוגע אליך:</h3>
                            <textarea rows="5" name="whyisca" value={this.state.whyisca} onChange={this.handleOnChange} className="form-control secondary-font-family"/>
                        </div>
                    </div>
                    <div className="row" style={{'marginBottom':'1em'}}>
                        <div className="col-xs-offset-9 col-xs-3" style={{'display':'inline-block'}}>
                            <h3>האם מעניין אותך תפקיד ניהולי בפרויקט?</h3>
                            <input type="radio" name="wannabemanager" value="yes" onChange={this.handleOnChange} /> כן
                            <input type="radio" name="wannabemanager" value="no" onChange={this.handleOnChange} style={{'marginRight':'1em'}}/> לא
                        </div>
                    </div>
                    <div className="row secondary-text-color">
                        <h2>כתיבת חיבור</h2><br/>
                    </div>
                    <div className="row" style={{'marginBottom':'2em'}}>
                        <div className="col-xs-offset-6 col-xs-6">
                        השתתפות בתכנית מצריכה ידיעת שפה זרה ברמה גבוהה. בחלק זה עליך לבחור אחד מארבעת הנושאים הבאים ולכתוב עליהם חיבור קצר (עד 400 מילים) בשפה שאינה עברית.
- אין צורך בידע מקצועי / אקדמי בכתיבת החיבור.
                        </div>
                    </div>
                    <div className="row" style={{'marginBottom':'1em'}}>
                        <div className="col-xs-offset-5 col-xs-7">
                            <h3>בחר/י באחד מהנושאים הבאים:</h3>
                            <input type="radio" name="essayTopic" value="newmedia" onChange={this.handleOnChange} style={{'marginBottom':'1em'}}/> תאר/י את הקשר בין כלי מדיה חדשה (רשתות חברתיות, עיתונות אינטרנטית ועוד) לבין השפעתם ב"עולם האמיתי"<br/>
                            <input type="radio" name="essayTopic" value="challenges" onChange={this.handleOnChange} style={{'marginBottom':'1em'}}/> לפי דעתך, מהם האתגרים העומדים בפני העם היהודי בכלל ובפני מדינת ישראל בפרט בשנים הקרובות?<br/>
                            <input type="radio" name="essayTopic" value="howtocombat" onChange={this.handleOnChange} style={{'marginBottom':'1em'}}/> כיצד ניתן לדעתך להיאבק בתופעות אנטישמיות מסביב לעולם?<br/>
                            <input type="radio" name="essayTopic" value="idea" onChange={this.handleOnChange} style={{'marginBottom':'1em'}}/> תאר/י יוזמה או רעיון שהיית רוצה ליישם במסגרת התכנית למאבק באנטישמיות באינטרנט<br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-offset-6 col-xs-6 form-group">
                            כתיבת החיבור (עד 400 מילים בשפה זרה):
                            <textarea rows="10" name="essay" value={this.state.essay} onChange={this.handleOnChange} className="form-control secondary-font-family"/>
                        </div>
                    </div>
                    <div className="row" style={{'marginBottom':'1em'}}>
                        <div className="col-xs-offset-5 col-xs-7">
                            <h3>איך שמעת על התכנית למאבק באנטישמיות?</h3>
                            <input type="radio" name="howheard" value="yedion" onChange={this.handleOnChange} style={{'marginBottom':'1em'}}/> פרסום בידיעון<br/>
                            <input type="radio" name="howheard" value="social" onChange={this.handleOnChange} style={{'marginBottom':'1em'}}/> פרסום ברשתות חברתיות<br/>
                            <input type="radio" name="howheard" value="friends" onChange={this.handleOnChange} style={{'marginBottom':'1em'}}/> חברים<br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-offset-6 col-xs-6 form-group">
                            <h3>הערות נוספות (לא חובה):</h3>
                            <textarea rows="2" name="comments" value={this.state.comments} onChange={this.handleOnChange} className="form-control secondary-font-family"/>
                        </div>
                    </div>
                    <div className="row" style={{'marginTop':'2em'}}>
                        <div className="col-xs-2 col-xs-offset-5">
                            <PageButton text="שלח" onClick={(e) => this.handleSubmit(e)}/>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

Registration.propTypes = {

};

export default Registration;