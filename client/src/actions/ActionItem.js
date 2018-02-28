import React from 'react';
import { Link } from 'react-router-dom';

import './ActionItem.css';

const ActionItem = (props) => {

  const { action } = props;
  return (
    <div className="ActionItem-Card">

      <div>{action.name}</div>
      <hr />
      <div>{action.description}</div>
      <div>{action.duration}</div>

    </div>
  );
};

export default ActionItem;
