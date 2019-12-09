import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

const middilewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middilewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middilewares));

export const persistor = persistStore(store);

export default { store, persistor };
