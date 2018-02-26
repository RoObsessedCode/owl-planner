import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './GoalItem.css';
import './Goals.css';
import GoalItem from './GoalItem';
import ObsessionItem from '../obsessions/ObsessionItem';

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


    return (
      <div className="Goals-HeadDiv">
        {this.props.goals.length ?
          <ObsessionItem obsession={obsession} />
          : null
        }
        {
          this.props.goals.length ?
            <Link to='/AddNewGoal'>
              <button>Add Goal</button>
            </Link>
            :
            null
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
