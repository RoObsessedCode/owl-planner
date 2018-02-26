import React from 'react';

import './GoalItem.css';

const GoalItem = (props) => {
  const { goal, removeGoal, obsessionId } = props;
  return (
    <div className="GoalItem-Card">
      <button className="GoalItem-Delete" onClick={() => removeGoal(goal, obsessionId)} >X</button>
      <div>{goal.name}</div>
      <div>{goal.description}</div>
      <div>{goal.term}</div>
    </div>
  )
}

export default GoalItem;
