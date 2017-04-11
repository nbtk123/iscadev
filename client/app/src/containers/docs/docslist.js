import React, { Component, PropTypes } from 'react';
import DocListItem from './doclistitem.js';

class DocsList extends Component {
    render() {
        return (
            <div className="container">
                {
                    this.props.docs.map((doc, i) => {
                        return (
                            <div className="row" style={{'marginTop':'2em'}}>
                                <DocListItem {... doc}/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

DocsList.propTypes = {
    docs: React.PropTypes.array.isRequired,
};

export default DocsList;