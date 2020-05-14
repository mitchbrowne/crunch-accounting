import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import components
import Redirect from './components/Redirect';
import Layout from './components/UI/Layout';
import CreateContact from './views/CreateContact';


class Routes extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/create-contact" component={CreateContact} />
          <Route path="/" component={Redirect} />
        </Layout>
      </Router>
    );
  }
}

export default Routes;
