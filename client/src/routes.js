import React, { Component } from 'react';
// import { connect } from "react-redux";
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import history from './history';
//import PropTypes from "prop-types";

import App from './app/App.js';
import MainFocus from './homePage/MainFocus';
import AllObsessions from './obsessions/AllObsessions';
import AddNewObsession from './obsessions/AddNewObsession';
import AddNewGoal from './goals/AddNewGoal';
import AddNewAction from './actions/AddNewAction';
import Goals from './goals/Goals';
import Actions from './actions/Actions';
import WeeklySchedule from './schedule/WeeklySchedule';

/*
One idea: the way boiler maker does it is that Router has one
child component: Main or App and that component is responsible for rendering
navbar or sidebar or whatever components are static and also it renders
props.children - kabeesh
*/
//@DragDropContext(HTML5Backend) --ES7
class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <App>
          <Switch>
            <Route path="/ao" component={AllObsessions} />
            <Route path="/obsession/:id/goals" component={Goals} />
            <Route path="/goal/:id/actions" component={Actions} />
            <Route path="/:id/AddNewAction" component={AddNewAction} />
            <Route path="/:id/AddNewGoal" component={AddNewGoal} />
            <Route path="/AddNewObsession" component={AddNewObsession} />
            <Route path="/WeeklySchedule" component={WeeklySchedule} />
            <Route component={MainFocus} />
          </Switch>
        </App>
      </Router>
    );
  }
}

export default DragDropContext(HTML5Backend)(Routes);
