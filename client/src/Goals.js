import React, { Component } from 'react';
import { connect } from 'react-redux';

import GoalItem from './GoalItem';

class Goals extends Component {


  render() {

    console.log('GOALS ---> ', this.props.goals)
    const allGoals = this.props.goals.map((goal) => {
      return <GoalItem key={goal.id} goal={goal} />
    })
    console.log('all Goals --->', allGoals)
    return (
      <div>
        {allGoals}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    goals: state.goals
  };
};

export default connect(mapStateToProps, null)(Goals);
