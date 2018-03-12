import React from "react";

import ObsessionName from "./ObsessionName";

const ListObsessions = ({ allObsessions }) => {
  return (
    <div>
      {allObsessions.length ? (
        allObsessions.map(obsession => {
          return <ObsessionName key={obsession.id} obsession={obsession} />;
        })
      ) : null}
    </div>
  );
};

export default ListObsessions;

// Dates just has attribute of the date
// Obsessions.hasMany(DayObsessions)
