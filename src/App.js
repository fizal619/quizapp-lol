import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';

import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {

  handleSearchChange(e) {
    console.log(e.target.value);
    this.setState({
      term: e.target.value
    });
  }

  render() {
    const term = this.state ? this.state.term : '';
    return (
      <BrowserRouter>
        <div>
          <Layout handleSearchChange={this.handleSearchChange.bind(this)}>
            <Route 
              term={this.state ? this.state.term : ''} 
              exact 
              path='/' 
              render={props=><Home {...props} term={term} />}/>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
