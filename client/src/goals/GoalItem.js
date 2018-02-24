import React from 'react';

import './GoalItem.css';

const GoalItem = (props) => {
  const { goal } = props;
  console.log('GoalItem Props --> ', props)
  return (
    <div>

      <hr />
      <div className="GoalItem-Card">
        <div>{goal.name}</div>
        <div>{goal.description}</div>
        <div>{goal.term}</div>
      </div>
    </div>
  )
}

export default GoalItem;