import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './LeftPane.css';
import { RETROSPECTIVES, REPORTS } from '../../configuration/routes';
import AzureDevOpsUserProfile from './AzureDevOpsUserProfile';
import TwistUserProfile from './TwistUserProfile';

export default class LeftPane extends Component {
    render() {
        return (
            <div className="left-pane-root-container">
                <div className={`left-pane-logo left-pane-last-in-section ${ this.props.className }`}>
                    Retrospectist
                </div>

                <AzureDevOpsUserProfile />
                <TwistUserProfile className="left-pane-last-in-section" />

                <Link to={RETROSPECTIVES}>
                    Retrospectives
                </Link>

                <Link to={REPORTS}>
                    Reports
                </Link>
            </div>
        )
    }
}