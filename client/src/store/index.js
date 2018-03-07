import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import obsessions from './obsessions';
import goals from './goals';
import actions from './actions';
import dayObsessions from './dayObsessions';


const reducer = combineReducers({obsessions, goals, actions, dayObsessions});

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({collapsed: true})
));
const store = createStore(reducer, middleware);

export default store;

export * from './obsessions';
export * from './goals';
export * from './actions';
export * from './dayObsessions';

/*

export * from './user'

^^example

*/
