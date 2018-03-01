import React from 'react';

import './GoalItem.css';

const GoalItem = (props) => {
  const { goal, removeGoal, obsessionId, loadActions } = props;
  return (
    <div className="GoalItem-Card">
      <button className="GoalItem-Delete" onClick={() => removeGoal(goal, obsessionId)} >X</button>
      <div onClick={() => loadActions(goal)}>{goal.name}</div>
      <hr />
      <div>{goal.description}</div>
      <div>{goal.term}</div>
    </div>
  )
}

export default GoalItem;
