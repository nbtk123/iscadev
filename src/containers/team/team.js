import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './team.css';
import ActiveStudentsManagers from './activestudentsmanagers.js';
import Alumnis from './alumnis.js'

class Team extends Component {

    componentWillMount() {
        Tabs.setUseDefaultStyles(false);
    }

    handleSelect(index, last) {
        console.log('Selected tab: ' + index + ', Last tab: ' + last);
    }

    componentDidMount() {
        this.props.route.onHighlightChanged({highlighted:'team'});
    }

    render() {
        return (
            <div className="container-fluid team-tabs" style={{'marginTop':'8em', 'padding':'0'}}>
                <h1 className="title">
                    אודותינו
                </h1>
                <Tabs onSelect={this.handleSelect} selectedIndex={0}>
                    <TabList>
                        <Tab>הצוות</Tab>
                        <Tab>הוועדה המייעצת</Tab>
                        <Tab>בוגרים</Tab>
                        <Tab>שותפים</Tab>
                    </TabList>
                    <TabPanel>
                        <ActiveStudentsManagers />
                    </TabPanel>
                    <TabPanel>
                        yolo 2
                    </TabPanel>
                    <TabPanel>
                        <Alumnis />
                    </TabPanel>
                    <TabPanel>
                        yolo 4
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default Team;