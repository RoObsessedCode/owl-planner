import React from "react";

import "./GoalItem.css";

const GoalItem = props => {
  const { goal, removeGoal, obsessionId, loadActions, disableClick } = props;
  return (
    <div className="GoalItem-Card">
      {disableClick ? null : (
        <button
          className="GoalItem-Delete"
          onClick={() => removeGoal(goal, obsessionId)}
        >
          X
        </button>
      )}

      {disableClick ? (
        <div>{goal.name}</div>
      ) : (
        <div onClick={() => loadActions(goal)}>{goal.name}</div>
      )}

      <hr />
      <div>{goal.description}</div>
      <div>{goal.term}</div>
    </div>
  );
};

export default GoalItem;
