import React, { Component } from "react";
import { connect } from "react-redux";

import "./AllObsessions.css";
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
    const { allObsessions } = this.props;
    return (
      <div>
        <label>Obsessions</label>
        {allObsessions &&
          allObsessions.map(obsession => (
            <div key={obsession.id}>
              <div className="ObsessionContainer">{obsession.name}</div>
            </div>
          ))}
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
    loadObsessions() {
      dispatch(fetchAllObsessions());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllObsessions);
