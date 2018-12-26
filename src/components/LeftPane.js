import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './LeftPane.css';
import { RETROSPECTIVES, REPORTS } from '../configuration/routes';

export default class LeftPane extends Component {
    render() {
        return (
            <div className="left-pane-root-container">
                <div className="left-pane-logo">
                    Retrospectist
                </div>

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