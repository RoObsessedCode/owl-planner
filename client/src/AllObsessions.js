import React, { Component } from "react";
import { connect } from "react-redux";

import "./AllObsessions.css";
import ObsessionItem from "./ObsessionItem"
import { fetchAllObsessions } from "./store";

//const obsessionArr = ['joggin', 'side project', 'eating well', 'family']

// const AllObsessions = ({ allObsessions }) => {
//   return (
//     allObsessions &&
//     allObsessions.map((obsession, i) => {
//       return <div key={i}>{obsession}</div>;
//     })
//   );
// };

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
