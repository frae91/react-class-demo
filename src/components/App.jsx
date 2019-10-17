import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import axios from 'axios';


class App extends Component {
  render() {
    return(
      <Router>
        <Link to='/'>Home</Link>
        <Link to='/users'>Users</Link>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/users' component={Users} />
        </Switch>
      </Router>
    );
  }
}

export default App;
