import React from 'react';

import './ObsessionItem.css';

const ObsessionItem = (props) => {
  const { obsession, removeObsession, loadGoals } = props;
  return (
    <div className="ObsessionItem-Card">
      <button className="ObsessionItem-Delete" onClick={() => removeObsession(obsession)}>X</button>

      <div onClick={() => loadGoals(obsession)} className="ObsessionItem-Name" >{obsession.name}</div>

      <hr />
      <div className="Obsession-Text">{obsession.description}</div>
      <div className="Obsession-Text">{obsession.purpose}</div>

    </div>
  )
}



export default ObsessionItem;
