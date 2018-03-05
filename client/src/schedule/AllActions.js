import React from 'react';

import ActionName from './ActionName';

const AllActions = ({ allActions }) => {
  return (
    <div>
      {allActions.length ? (
        allActions.map(action => {
          return <ActionName key={action.id} action={action} />;
        })
      ) : null}
    </div>
  );
};

export default AllActions;
