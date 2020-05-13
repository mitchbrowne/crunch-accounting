import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CreateContact from './views/CreateContact';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/create-contact" component={CreateContact} />
      </Router>
    );
  }
}

export default Routes;
