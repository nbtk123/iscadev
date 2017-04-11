import React, { Component, PropTypes } from 'react';
import DocsList from './docslist.js';
import './docs.css';

class Docs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            docs: [
                {
                    title: 'מסמך 1',
                    text: ' אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום! אנטישמים. אנטישמים בכל מקום!',
                    imgsrc: 'http://thejerusalemconnection.us/wp-content/uploads/2011/03/copy_of_anti_semitic_2_xlarge.jpg',
                    link: 'http://www.google.com',
                },
                {
                    title: 'מסמך 2',
                    text: 'אנטישמים. אנטישמים בכל מקום!',
                    imgsrc: 'http://thejerusalemconnection.us/wp-content/uploads/2011/03/copy_of_anti_semitic_2_xlarge.jpg',
                    link: 'http://www.google.com',
                },
                {
                    title: 'מסמך 3',
                    text: 'אנטישמים. אנטישמים בכל מקום!',
                    imgsrc: 'http://thejerusalemconnection.us/wp-content/uploads/2011/03/copy_of_anti_semitic_2_xlarge.jpg',
                    link: 'http://www.google.com',
                }
            ]
        }
    }

    componentWillMount() {
        this.props.route.onHighlightChanged({highlighted:'docs'});
    }

    render() {
        return (
            <div className="container-fluid" style={{'marginTop':'8em'}}>
                <div className="row">
                    <h1 className="docs-page-title">מסמכים</h1>
                </div>
                <div className="row">
                    <DocsList docs={this.state.docs} />
                </div>
            </div>
        );
    }
}

Docs.propTypes = {

};

export default Docs;