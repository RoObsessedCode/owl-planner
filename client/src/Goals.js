import React, { Component } from 'react';
import { connect } from 'react-redux';

import GoalItem from './GoalItem';

class Goals extends Component {


  render() {

    let obsession = null;

    const allGoals = this.props.goals.map((goal) => {

      return <GoalItem key={goal.id} goal={goal} />
    });
    console.log('LENGTHHH', this.props.goals.length)
    if (this.props.goals.length) {
      obsession = this.props.obsessions.find(ob => ob.id === this.props.goals[0].obsessionId);
    }

    console.log('obsession BRO: ', obsession)

    return (
      <div>
        {this.props.goals.length ?
          <div className="GoalItem-Card">
            <div>{obsession.name}</div>
            <div>{obsession.description}</div>
            <div>{obsession.purpose}</div>

          </div>
          : null
        }
        {allGoals}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    goals: state.goals,
    obsessions: state.obsessions
  };
};

export default connect(mapStateToProps, null)(Goals);
