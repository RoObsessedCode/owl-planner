import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import "./AllObsessions.css";
import ObsessionItem from "./ObsessionItem"
import { fetchAllObsessions, removeObsession, fetchGoalsForObsession } from "./store";



class AllObsessions extends Component {
  componentDidMount() {
    this.props.loadObsessions();
  }

  render() {


    const allObsessions = this.props.allObsessions.map((obsession) => {
      return <ObsessionItem key={obsession.id} obsession={obsession} removeObsession={this.props.removeObsession} loadGoals={this.props.loadGoals} />
    })

    return (
      <div className="ObsessionContainer">
        <Link to='/AddNewObsession'>
          <button style={{ fontSize: "x-large" }}>+</button>
        </Link>

        {allObsessions}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allObsessions: state.obsessions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadObsessions() {
      dispatch(fetchAllObsessions());
    },
    removeObsession(obsession) {
      dispatch(removeObsession(obsession))
    },
    loadGoals(obsession) {
      dispatch(fetchGoalsForObsession(obsession))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllObsessions);
