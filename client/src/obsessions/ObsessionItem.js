import React from "react";

import "./ObsessionItem.css";

const ObsessionItem = props => {
  const { obsession, removeObsession, loadGoals, disableClick } = props;

  //console.log('specific obsession Item', obsession)
  return (
    <div className="ObsessionItem-Card">
      {disableClick ? null : (
        <button
          className="ObsessionItem-Delete"
          onClick={() => removeObsession(obsession)}
        >
          X
        </button>
      )}

      {disableClick ? (
        <div className="ObsessionItem-Name">{obsession.name}</div>
      ) : (
        <div
          onClick={() => loadGoals(obsession)}
          className="ObsessionItem-Name"
        >
          {obsession.name}
        </div>
      )}

      <hr />
      <div className="Obsession-Text">{obsession.description}</div>
      <div className="Obsession-Text">{obsession.purpose}</div>
    </div>
  );
};

export default ObsessionItem;
