import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middilewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middilewares));

export default store;
