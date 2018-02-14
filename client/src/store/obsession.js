import axios from 'axios';
import history from '../history';

const GET_ALL_OBSESSIONS = 'GET_ALL_OBSESSIONS';

const getAllObsessions = obsessions => ({ type: GET_ALL_OBSESSIONS, obsessions })

export const fetchAllObsessions = () =>
  dispatch =>
    axios.get('/api/obsession')
      .then(res => res.data)
      .then(allObsessions => dispatch(getAllObsessions(allObsessions)))
      .catch(err => console.log(err));


export default function (obsessions = [], action) {
  switch(action.type) {
    case GET_ALL_OBSESSIONS:
      return action.obsessions;
    default:
      return obsessions;
  }
}
