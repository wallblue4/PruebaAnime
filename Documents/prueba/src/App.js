import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Home from './components/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/Home' component={Home}/>
          </Switch>
        </Router>
        
        
      </div>
    );
  }
}

export default App;
