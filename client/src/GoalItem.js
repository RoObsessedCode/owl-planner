import React from 'react';


const GoalItem = (props) => {
  const {goal} = props;
  return (
    <div>
      <div>{goal.name}</div>
      <div>{goal.description}</div>
      <div>{goal.term}</div>
    </div>
  )
}

export default GoalItem;
