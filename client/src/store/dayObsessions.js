import axios from 'axios';
import history from '../history';

const ADD_NEW_DAYOBSESSIONS = 'ADD_NEW_DAYOBSESSIONS';

const createdDayObsessions = dayObsessions => ({ type: ADD_NEW_DAYOBSESSIONS, dayObsessions});

export const postNewDayObsessions = (dayObsessions) =>
  dispatch =>
    axios.post(`/api/dayObsessions`, dayObsessions)
      .then(res => res.data)
      .then(newDayObsessions => dispatch(createdDayObsessions(newDayObsessions)))
      .catch(err => console.log(err));



export default function (dayObsessionsMany = [], action) {
  switch (action.type) {
    case ADD_NEW_DAYOBSESSIONS:
      return dayObsessionsMany.concat(action.dayObsessions);
    default:
      return dayObsessionsMany;
  }
}
