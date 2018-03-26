import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Actions.css";
import ActionItem from "./ActionItem";
import GoalItem from "../goals/GoalItem";
import { removeAction } from "../store";

class Actions extends Component {
  render() {
    let goal = null;
    const allActions = this.props.actions.map(action => {
      return (
        <ActionItem
          key={action.id}
          action={action}
          goalId={this.props.match.params.id}
          removeAction={this.props.removeAction}
        />
      );
    });

    goal = this.props.goals.find(gl => gl.id === +this.props.match.params.id);

    return (
      <div className="Actions-HeadDiv">
        <GoalItem goal={goal} disableClick={true} />

        <Link to={`/${this.props.match.params.id}/AddNewAction`}>
          <button>Add Action</button>
        </Link>

        {allActions}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    actions: state.actions,
    goals: state.goals
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeAction(action) {
      dispatch(removeAction(action));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Actions);
