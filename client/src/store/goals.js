import axios from 'axios';
import history from '../history';

const GET_GOALS_FOR_OBSESSION = 'GET_GOALS_FOR_OBSESSION';


const getGoals = goals => ({ type: GET_GOALS_FOR_OBSESSION, goals });


export const fetchGoalsForObsession = (obsession) =>
  dispatch =>
    axios.get(`/api/goal/${obsession.id}`)
      .then(res => res.data)
      .then(goals => {
        console.log('thunk goals!', goals)
        dispatch(getGoals(goals));
        history.push(`/obsession/${obsession.id}/goals`);

      })
      .catch(err => console.log(err))

export default function (goals = [], action) {
  switch (action.type) {
    case GET_GOALS_FOR_OBSESSION:
      return action.goals;
    default:
      return goals;
  }
}
