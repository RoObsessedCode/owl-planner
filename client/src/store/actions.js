import axios from 'axios';
import history from '../history';

const GET_ACTIONS_FOR_GOAL = 'GET_ACTIONS_FOR_GOAL';
const GET_ALL_ACTIONS = 'GET_ALL_ACTIONS';
const ADD_NEW_ACTION = 'ADD_NEW_ACTION';
const DELETE_ACTION = 'DELETE_ACTION';


const gotActions = actions => ({ type: GET_ACTIONS_FOR_GOAL, actions });
const gotAllActions = actions => ({type: GET_ALL_ACTIONS, actions });
const createdAction = action => ({ type: ADD_NEW_ACTION, action });
const deletedAction = action => ({ type: DELETE_ACTION, action});

export const fetchActionsForGoal = (goal) =>
  dispatch =>
    axios.get(`/api/action/${goal.id}`)
      .then(res => res.data)
      .then(actions => {
        dispatch(gotActions(actions));
        history.push(`/goal/${goal.id}/actions`);
      })
      .catch(err => console.log(err));

export const fetchAllActions = () =>
{
  console.log('We have reached actions thunk')
  return dispatch =>
    axios.get('/api/action')
      .then(res => res.data)
      .then(actions => {
        console.log('thunk actions ==>', actions)
        return dispatch(gotAllActions(actions))
      })
      .catch(err => console.log(err));
}

export const postNewAction = (action, goalId) =>
  dispatch =>
    axios.post(`/api/action/${goalId}`, action)
      .then(res => res.data)
      .then(newAction => (
        dispatch(createdAction(newAction))))
      .catch(err => console.log(err));

export const removeAction = (action, goalId) =>
  dispatch =>
    axios.delete(`/api/action/${action.id}`)
      .then(() => {
        history.push(`/goal/${goalId}/actions`);
        dispatch(deletedAction(action));
      })
      .catch(err => console.error(err))

export default function(actions = [], action) {
  switch (action.type) {
    case GET_ACTIONS_FOR_GOAL:
      return action.actions;
    case GET_ALL_ACTIONS:
      return action.actions;
    case ADD_NEW_ACTION:
      return actions.concat(action.action);
    case DELETE_ACTION:
      return actions.filter((act) => act.id !== action.action.id);
    default:
      return actions;
  }
}
