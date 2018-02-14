import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import obsessions from './obsessions';

const reducer = combineReducers({obsessions});

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({collapsed: true})
));
const store = createStore(reducer, middleware);

export default store;

export * from './obsessions';

/*

export * from './user'

^^example

*/
