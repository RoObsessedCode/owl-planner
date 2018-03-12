import React, { Component } from "react";
import { connect } from "react-redux";

//import ActionName from '../actions/ActionName';
//import AllActions from './AllActions';
import AllObsessions from './ListObsessions';
import WeekLayout from './WeekLayout';
import { fetchAllObsessions } from "../store";

import "./WeeklySchedule.css";



class WeeklySchedule extends Component {
  componentDidMount() {
    this.props.loadAllObsessions();
  }

  render() {
    const { allObsessions } = this.props;
    return (
      <div>
        <AllObsessions allObsessions={allObsessions} />
        <WeekLayout />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allObsessions: state.obsessions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadAllObsessions() {
      dispatch(fetchAllObsessions());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeeklySchedule);

