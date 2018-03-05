import React, { Component } from "react";
import { connect } from "react-redux";

//import ActionName from '../actions/ActionName';
import AllActions from './AllActions';
import WeekLayout from './WeekLayout';
import { fetchAllActions } from "../store";

import "./WeeklySchedule.css";



class WeeklySchedule extends Component {
  componentDidMount() {
    this.props.loadAllActions();
  }

  render() {
    const { allActions } = this.props;
    console.log("actions -->", allActions);
    return (
      <div>
        <AllActions allActions={allActions} />
        <WeekLayout />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allActions: state.actions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadAllActions() {
      dispatch(fetchAllActions());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeeklySchedule);

// <label className="WeeklySchedule-Card">Monday</label>
// <label className="WeeklySchedule-Card">Tuesday</label>
// <label className="WeeklySchedule-Card">Wednesday</label>
// <label className="WeeklySchedule-Card">Thursday</label>
// <label className="WeeklySchedule-Card">Friday</label>
// <label className="WeeklySchedule-Card">Saturday</label>
// <label className="WeeklySchedule-Card">Sunday</label>
