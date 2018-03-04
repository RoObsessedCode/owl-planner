import React from 'react';

import './ActionItem.css';

const ActionName = ({action}) => {
  return (
    <div className="ActionItem-Card">
      <div>{action.name}</div>
    </div>
  )
}

export default ActionName;
