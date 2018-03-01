import React from 'react';
import { Link } from 'react-router-dom';

import './ActionItem.css';

const ActionItem = (props) => {

  const { action, removeAction, goalId } = props;
  return (
    <div className="ActionItem-Card">
      <button onClick={() => removeAction(action, goalId)}>x</button>
      <div>{action.name}</div>
      <hr />
      <div>{action.description}</div>
      <div>{action.duration}</div>

    </div>
  );
};

export default ActionItem;
