import axios from 'axios';
import history from '../history';

const GET_GOALS_FOR_OBSESSION = 'GET_GOALS_FOR_OBSESSION';
const ADD_NEW_GOAL = 'ADD_NEW_GOAL';


const getGoals = goals => ({ type: GET_GOALS_FOR_OBSESSION, goals });
const createdGoal = goal => ({ type: ADD_NEW_GOAL, goal});


export const fetchGoalsForObsession = (obsession) =>
  dispatch =>
    axios.get(`/api/goal/${obsession.id}`)
      .then(res => res.data)
      .then(goals => {
        console.log('thunk goals!', goals)
        dispatch(getGoals(goals));
        history.push(`/obsession/${obsession.id}/goals`);

      })
      .catch(err => console.log(err));


export const postNewGoal = (goal, obsessionId) =>
  dispatch =>
    axios.post(`/api/goal/${obsessionId}`, goal)
      .then(res => res.data)
      .then(newGoal => dispatch(createdGoal(newGoal)))
      .catch(err => console.log(err));

export default function (goals = [], action) {
  switch (action.type) {
    case GET_GOALS_FOR_OBSESSION:
      return action.goals;
    case ADD_NEW_GOAL:
      return goals.concat(action.goal);
    default:
      return goals;
  }
}
