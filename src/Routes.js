import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import components
import Layout from './components/UI/Layout';
import CreateContact from './views/CreateContact';
import Redirect from './views/Redirect';


class Routes extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route path="/" component={Redirect} />
          <Route exact path="/create-contact" component={CreateContact} />
        </Layout>
      </Router>
    );
  }
}

export default Routes;
