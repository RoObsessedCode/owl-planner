import axios from 'axios';
import history from '../history';

const GET_ALL_OBSESSIONS = 'GET_ALL_OBSESSIONS';
const ADD_NEW_OBSESSION = 'ADD_NEW_OBSESSION';
const DELETE_OBSESSION = 'DELETE_OBSESSION'

const gotAllObsessions = obsessions => ({ type: GET_ALL_OBSESSIONS, obsessions });
const createdObsession = obsession => ({ type: ADD_NEW_OBSESSION, obsession});
const deletedObsession = obsession => ({ type: DELETE_OBSESSION, obsession});


export const fetchAllObsessions = () =>
  dispatch =>
    axios.get('/api/obsession')
      .then(res => res.data)
      .then(allObsessions => dispatch(gotAllObsessions(allObsessions)))
      .catch(err => console.log(err));


export const postNewObsession = (obsession) =>
  dispatch =>
    axios.post('/api/obsession', obsession)
    .then(res => res.data)
    .then(newObsession => dispatch(createdObsession(newObsession)))
    .catch(err => console.log(err));

export const removeObsession = (obsession) =>
    dispatch =>
      axios.delete(`/api/obsession/${obsession.id}`)
        .then(() => {
          history.push('/ao');
          dispatch(deletedObsession(obsession));
        })
        .catch(err => console.error(err))



export default function (obsessions = [], action) {
  switch (action.type) {
    case GET_ALL_OBSESSIONS:
      return action.obsessions;
    case ADD_NEW_OBSESSION:
      return obsessions.concat(action.obsession);
    case DELETE_OBSESSION:
      return obsessions.filter((obsession) => obsession.id !== action.obsession.id);
    default:
      return obsessions;
  }
}
