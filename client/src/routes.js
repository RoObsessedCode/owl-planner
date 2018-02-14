import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, browserHistory } from "react-router";
import { Route, Switch } from "react-router-dom";
import history from './history'
//import PropTypes from "prop-types";


import App from "./App";
import AllObsessions from './AllObsessions'

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>

          <Switch>
            {/* Routes placed here are available to all visitors */}
            {/* <Route exact path="/" component={AllProducts} /> */}

            <Route path='/ao' component={AllObsessions} />
            <Route path='/' component={App} />
          </Switch>

      </Router>
    );
  }
}
