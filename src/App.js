import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import Client from './containers/client/client';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Client} />
      </div>
    );
  }
}

export default App;
