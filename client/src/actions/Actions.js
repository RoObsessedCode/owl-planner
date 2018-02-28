import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ActionItem from './ActionItem';
import GoalItem from '../goals/GoalItem';
import './Actions.css';

class Actions extends Component {


  render() {

    let goal = null;
    const allActions = this.props.actions.map((action) => {
      return <ActionItem key={action.id} action={action} goalId={this.props.match.params.id} />
    });

    if (this.props.actions.length) {
      goal = this.props.goals.find(gl => gl.id === this.props.actions[0].goalId);
    }

    return (
      <div className="Actions-HeadDiv">
        {this.props.actions.length ?
          <GoalItem goal={goal}/>
          : null
        }
                {
          this.props.actions.length ?
            <Link to={`/${goal.id}/AddNewAction`}>
              <button>Add Action</button>
            </Link>
            :
            null
        }
        {allActions}
      </div>
    )

  }
}

const mapStateToProps = state => {
  return {
    actions: state.actions,
    goals: state.goals
  };
}

export default connect(mapStateToProps, null)(Actions)
