import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, browserHistory } from "react-router";
import { Route, Switch } from "react-router-dom";
import history from './history'
//import PropTypes from "prop-types";


import App from "./App";
import MainFocus from "./MainFocus";
import AllObsessions from './AllObsessions';
import AddNewObsession from './AddNewObsession';
import Goals from './Goals';

/*
One idea: the way boiler maker does it is that Router has one
child component: Main or App and that component is responsible for rendering
navbar or sidebar or whatever components are static and also it renders
props.children - kabeesh
*/

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <App>
          <Switch>

            <Route path='/ao' component={AllObsessions} />
            <Route path='/obsession/:id/goals' component={Goals}/>
            <Route path='/AddNewObsession' component={AddNewObsession} />
            <Route component={MainFocus} />
          </Switch>
        </App>
      </Router>
    );
  }
}
