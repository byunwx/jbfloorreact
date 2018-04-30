import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Navbar from './components/nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <logo />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
