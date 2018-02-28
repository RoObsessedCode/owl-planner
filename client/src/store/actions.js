import axios from 'axios';
import history from '../history';

const GET_ACTIONS_FOR_GOAL = 'GET_ACTIONS_FOR_GOAL';


const gotActions = actions => ({ type: GET_ACTIONS_FOR_GOAL, actions });

export const fetchActionsForGoal = (goal) =>
  dispatch =>
    axios.get(`/api/action/${goal.id}`)
      .then(res => res.data)
      .then(actions => {
        dispatch(gotActions(actions));
        history.push(`/goal/${goal.id}/actions`);
      })
      .catch(err => console.log(err));

export default function(actions = [], action) {
  switch (action.type) {
    case GET_ACTIONS_FOR_GOAL:
      return action.actions;
    default:
      return actions;
  }
}
