import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import LeftPane from './LeftPane';
import Reports from '../reports';
import Retrospectives from '../retrospectives';
import { RETROSPECTIVES, REPORTS } from '../../configuration/routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="root-container">
          <LeftPane className="left-pane" />
          <div className="content-container">
            <Route path={RETROSPECTIVES} component={Retrospectives} />
            <Route path={REPORTS} component={Reports} />
        </div>
        </div>
      </Router>
    );
  }
}

export default App;