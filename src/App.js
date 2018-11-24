import React, { Component } from 'react';
import './App.css';
import { LandingPage } from './pages/landing-page';
import { Signup } from './pages/signup';
import { MoreInfo } from './pages/more-info';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return  <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/signup/" component={Signup} />
        <Route path="/moreinfo/" component={MoreInfo} />
      </Switch>
    </Router>;
  }
}

export default App;