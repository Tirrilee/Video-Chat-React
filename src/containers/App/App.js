import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from '../../logo.svg';
import './style.css';

import HomePage from '../HomePage'
import SignInPage from '../SignInPage'
import SignUpPage from '../SignUpPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/signin" component={SignInPage} />
            <Route path="/signup" component={SignUpPage} />
            { /*
            <Route path="/features" component={FeaturePage} />
            <Route path="" component={NotFoundPage} /> 
            */}
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
