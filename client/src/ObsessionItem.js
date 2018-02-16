import React from "react";


import './ObsessionItem.css';

const ObsessionItem = (props) => {
  const {obsession} = props;
  return (
    <div className="ObsessionItem-Card">
      <div>{obsession.name}</div>
      <div>{obsession.description}</div>
      <div>{obsession.purpose}</div>

    </div>
  )
}

export default ObsessionItem;
