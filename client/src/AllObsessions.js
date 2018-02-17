import React, { Component } from "react";
import { connect } from "react-redux";

import "./AllObsessions.css";
import ObsessionItem from "./ObsessionItem"
import { fetchAllObsessions } from "./store";



class AllObsessions extends Component {
  componentDidMount() {
    this.props.loadObsessions();
  }

  render() {


    const allObsessions = this.props.allObsessions.map((obsession) => {
      return <ObsessionItem key={obsession.id} obsession={obsession} />
    })

    return (
      <div className="ObsessionContainer">
        <button style={{fontSize: "x-large"}}>+</button>
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllObsessions);
