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
            year: '',
            study: '',
            languages: '',
            whyisca: '',
            wannabemanager: '',
            essayTopic: '',
            essay: '',
            howheard: '',
            comments: '',
        }
    }

    componentWillMount() {
        this.props.route.onHighlightChanged({highlighted:'register'});
    }

    handleSubmit(event) {

        console.log(event)
        
        var map = {
            'entry.1633974713': this.state.firstName,
            'entry.397745628': this.state.lastName,
            'entry.1660956678': this.state.id,
            'entry.1816056364': this.state.email,
            'entry.799652207': this.state.sex,
            'entry.1754644276_year': this.state.birthdate.split('-')[0],
            'entry.1754644276_month': this.state.birthdate.split('-')[1],
            'entry.1754644276_day': this.state.birthdate.split('-')[2],
            'entry.473786656': this.state.phone,
            'entry.931523428': this.state.degreeType,
            'entry.1850000076': this.state.year,
            'entry.805312048': this.state.study,
            'entry.663232133': this.state.languages,
            'entry.1228797038': this.state.whyisca,
            'entry.528656098': 'לא',
            'entry.102503468': this.state.essayTopic,
            'entry.418703999': this.state.essay,
            'entry.39549789': this.state.howheard,
            'entry.670247611': 'כן',
            'entry.1628556543': this.state.comments,
        };

        var body = '';
        Object.keys(map).forEach((key, i) => {
            if (i != 0) {
                body += '&';
            }
            body += key + '=' + map[key];
        })

        console.log(map);

        // fetch('https://docs.google.com/forms/d/e/1FAIpQLSf511h-ZC-kTnk0DLpJ8piqYx-_ygj6G72vSoAe6VFzkafcTg/formResponse', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     body: 'entry.1614627274=yolo ahuia &entry.538735884=blat ahuuya &entry.952213113.other_option_response=&entry.952213113=Option 1'
        // })

        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            id: '',
            birthdate: '',
            phone: '',
            sex: '',
            degreeType: '',
            year: '',
            study: '',
            languages: '',
            whyisca: '',
            wannabemanager: '',
            essayTopic: '',
            essay: '',
            howheard: '',
            comments: '',
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
                <h1 className="registration-title">טופס הרשמה לתכנית ISCA</h1>
                <div className="container" style={{'marginTop':'0em', 'marginBottom':'8em'}}>
                    <div className="row" style={{'marginTop':'2em'}}>
                        <div className="col-xs-4 form-group">
                            <h3>שם פרטי:</h3>
                            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleOnChange} placeholder="שם פרטי" className="form-control secondary-font-family"/>
                        </div>
                        <div className="col-xs-4 form-group">
                            <h3>שם משפחה:</h3>
                            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleOnChange} placeholder="שם משפחה" className="form-control secondary-font-family"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4 form-group">
                            <h3>כתובת מייל:</h3>
                            <input type="text" name="email" value={this.state.email} onChange={this.handleOnChange} placeholder="your@email.com" className="form-control secondary-font-family" style={{'direction':'ltr'}}/>
                        </div>
                        <div className="col-xs-4 form-group">
                            <h3>תעודת זהות:</h3>
                            <input type="text" name="id" value={this.state.id} onChange={this.handleOnChange} placeholder="123456789" className="form-control secondary-font-family" style={{'direction':'ltr'}}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4 form-group">
                            <h3>מס' טלפון: </h3>
                            <input type="text" name="phone" value={this.state.phone} onChange={this.handleOnChange} className="form-control secondary-font-family" style={{'direction':'ltr'}}/>
                        </div>
                        <div className="col-xs-4 form-group">
                            <h3>תאריך לידה:</h3>
                            <input type="date" name="birthdate" value={this.state.birthdate} onChange={this.handleOnChange} className="form-control secondary-font-family"/>
                        </div>
                    </div>
                    <div className="row" style={{'marginBottom':'1em'}}>
                        <div className="col-xs-2" style={{'display':'inline-block'}}>
                            <h3>מין:</h3>
                            <input type="radio" name="sex" value="זכר" onChange={this.handleOnChange} /> זכר
                            <input type="radio" name="sex" value="נקבה" onChange={this.handleOnChange} style={{'marginRight':'1em'}}/> נקבה
                        </div>
                    </div>
                    <div className="row" style={{'marginBottom':'1em'}}>
                        <div className="col-xs-2" style={{'display':'inline-block'}}>
                            <h3>סוג התואר:</h3>
                            <input type="radio" name="degreeType" value="תואר ראשון" onChange={this.handleOnChange} /> תואר ראשון
                            <input type="radio" name="degreeType" value="תואר שני" onChange={this.handleOnChange} style={{'marginRight':'1em'}}/> תואר שני
                        </div>
                    </div>
                    <div className="row" style={{'marginBottom':'1em'}}>
                        <div className="col-xs-3" style={{'display':'inline-block'}}>
                            <h3>שנת לימוד:</h3>
                            <input type="radio" name="year" value="ראשונה" onChange={this.handleOnChange} /> ראשונה
                            <input type="radio" name="year" value="שניה" onChange={this.handleOnChange} style={{'marginRight':'1em'}}/> שניה
                            <input type="radio" name="year" value="שלישית" onChange={this.handleOnChange} style={{'marginRight':'1em'}}/> שלישית
                            <input type="radio" name="year" value="רביעית" onChange={this.handleOnChange} style={{'marginRight':'1em'}}/> רביעית
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4 form-group">
                            <h3>תחום/י לימוד:</h3>
                            <input type="text" name="study" value={this.state.study} onChange={this.handleOnChange} className="form-control secondary-font-family"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4 form-group">
                            <h3>שפות זרות (מלבד עברית) בהן את/ה שולט/ת ברמה גבוהה:</h3>
                            <input type="text" name="languages" value={this.state.languages} onChange={this.handleOnChange} className="form-control secondary-font-family"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-6 form-group">
                            <h3>תארי/י בקצרה כיצד נושא האנטישמיות נוגע אליך:</h3>
                            <textarea rows="5" name="whyisca" value={this.state.whyisca} onChange={this.handleOnChange} className="form-control secondary-font-family"/>
                        </div>
                    </div>
                    <div className="row" style={{'marginBottom':'1em'}}>
                        <div className="col-xs-3" style={{'display':'inline-block'}}>
                            <h3>האם מעניין אותך תפקיד ניהולי בפרויקט?</h3>
                            <input type="radio" name="wannabemanager" value="כן" onChange={this.handleOnChange} /> כן
                            <input type="radio" name="wannabemanager" value="לא" onChange={this.handleOnChange} style={{'marginRight':'1em'}}/> לא
                        </div>
                    </div>
                    <div className="row secondary-text-color">
                        <h2>כתיבת חיבור</h2><br/>
                    </div>
                    <div className="row" style={{'marginBottom':'2em'}}>
                        <div className="col-xs-6">
                        השתתפות בתכנית מצריכה ידיעת שפה זרה ברמה גבוהה. בחלק זה עליך לבחור אחד מארבעת הנושאים הבאים ולכתוב עליהם חיבור קצר (עד 400 מילים) בשפה שאינה עברית.
- אין צורך בידע מקצועי / אקדמי בכתיבת החיבור.
                        </div>
                    </div>
                    <div className="row" style={{'marginBottom':'1em'}}>
                        <div className="col-xs-7">
                            <h3>בחר/י באחד מהנושאים הבאים:</h3>
                            <input type="radio" name="essayTopic" value='תאר/י את הקשר בין כלי מדיה חדשה (רשתות חברתיות, עיתונות אינטרנטית ועוד) לבין השפעתם ב"עולם האמיתי"' onChange={this.handleOnChange} style={{'marginBottom':'1em'}}/> תאר/י את הקשר בין כלי מדיה חדשה (רשתות חברתיות, עיתונות אינטרנטית ועוד) לבין השפעתם ב"עולם האמיתי"<br/>
                            <input type="radio" name="essayTopic" value="לפי דעתך, מהם האתגרים העומדים בפני העם היהודי בכלל ובפני מדינת ישראל בפרט בשנים הקרובות?" onChange={this.handleOnChange} style={{'marginBottom':'1em'}}/> לפי דעתך, מהם האתגרים העומדים בפני העם היהודי בכלל ובפני מדינת ישראל בפרט בשנים הקרובות?<br/>
                            <input type="radio" name="essayTopic" value="כיצד ניתן לדעתך להיאבק בתופעות אנטישמיות מסביב לעולם?" onChange={this.handleOnChange} style={{'marginBottom':'1em'}}/> כיצד ניתן לדעתך להיאבק בתופעות אנטישמיות מסביב לעולם?<br/>
                            <input type="radio" name="essayTopic" value="תאר/י יוזמה או רעיון שהיית רוצה ליישם במסגרת התכנית למאבק באנטישמיות באינטרנט" onChange={this.handleOnChange} style={{'marginBottom':'1em'}}/> תאר/י יוזמה או רעיון שהיית רוצה ליישם במסגרת התכנית למאבק באנטישמיות באינטרנט<br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-6 form-group">
                            כתיבת החיבור (עד 400 מילים בשפה זרה):
                            <textarea rows="10" name="essay" value={this.state.essay} onChange={this.handleOnChange} className="form-control secondary-font-family"/>
                        </div>
                    </div>
                    <div className="row" style={{'marginBottom':'1em'}}>
                        <div className="col-xs-7">
                            <h3>איך שמעת על התכנית למאבק באנטישמיות?</h3>
                            <input type="radio" name="howheard" value="פרסום בידיעון" onChange={this.handleOnChange} style={{'marginBottom':'1em'}}/> פרסום בידיעון<br/>
                            <input type="radio" name="howheard" value="פרסום ברשתות החברתיות" onChange={this.handleOnChange} style={{'marginBottom':'1em'}}/> פרסום ברשתות חברתיות<br/>
                            <input type="radio" name="howheard" value="חברים" onChange={this.handleOnChange} style={{'marginBottom':'1em'}}/> חברים<br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-6 form-group">
                            <h3>הערות נוספות (לא חובה):</h3>
                            <textarea rows="2" name="comments" value={this.state.comments} onChange={this.handleOnChange} className="form-control secondary-font-family"/>
                        </div>
                    </div>
                    <div className="row" style={{'marginTop':'2em'}}>
                        <div className="col-xs-2">
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