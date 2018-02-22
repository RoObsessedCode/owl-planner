import React from 'react';
import { Link } from 'react-router-dom'


import './ObsessionItem.css';

const ObsessionItem = (props) => {
  const {obsession, removeObsession} = props;
  console.log('KEEEEEY ---> ', props)
  return (
    <Link to={`/obsession/${obsession.id}/goals`} className="ObsessionItem-Card">
      <button className="ObsessionItem-Delete" onClick={() => removeObsession(obsession)}>X</button>
      <div className="ObsessionItem-Name" >{obsession.name}</div>
      <hr></hr>
      <div>{obsession.description}</div>
      <div>{obsession.purpose}</div>

    </Link>
  )
}



export default ObsessionItem;
