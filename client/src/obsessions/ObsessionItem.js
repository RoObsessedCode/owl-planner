import React from 'react';
import { Link } from 'react-router-dom'


import './ObsessionItem.css';

const ObsessionItem = (props) => {
  const { obsession, removeObsession, loadGoals } = props;
  console.log('KEEEEEY ---> ', props)
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
