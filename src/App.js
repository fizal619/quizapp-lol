import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';

import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <Route exact path='/' component={Home}/>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
