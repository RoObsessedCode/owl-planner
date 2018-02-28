import axios from 'axios';
import history from '../history';

const GET_GOALS_FOR_OBSESSION = 'GET_GOALS_FOR_OBSESSION';
const ADD_NEW_GOAL = 'ADD_NEW_GOAL';
const DELETE_GOAL = 'DELETE_GOAL';


const gotGoals = goals => ({ type: GET_GOALS_FOR_OBSESSION, goals });
const createdGoal = goal => ({ type: ADD_NEW_GOAL, goal});
const deletedGoal = goal => ({ type: DELETE_GOAL, goal});

//is it bad practice to pass in the whole object if I am just using ID
export const fetchGoalsForObsession = (obsession) =>
  dispatch =>
    axios.get(`/api/goal/${obsession.id}`)
      .then(res => res.data)
      .then(goals => {
        dispatch(gotGoals(goals));
        history.push(`/obsession/${obsession.id}/goals`);

      })
      .catch(err => console.log(err));


export const postNewGoal = (goal, obsessionId) =>
  dispatch =>
    axios.post(`/api/goal/${obsessionId}`, goal)
      .then(res => res.data)
      .then(newGoal => dispatch(createdGoal(newGoal)))
      .catch(err => console.log(err));

export const removeGoal = (goal, obsessionId) =>
  dispatch =>
    axios.delete(`/api/goal/${goal.id}`)
      .then(() => {
        history.push(`/obsession/${obsessionId}/goals`);
        dispatch(deletedGoal(goal));
      })
      .catch(err => console.error(err));

export default function (goals = [], action) {
  switch (action.type) {
    case GET_GOALS_FOR_OBSESSION:
      return action.goals;
    case ADD_NEW_GOAL:
      return goals.concat(action.goal);
    case DELETE_GOAL:
      return goals.filter((goal) => goal.id !== action.goal.id);
    default:
      return goals;
  }
}
