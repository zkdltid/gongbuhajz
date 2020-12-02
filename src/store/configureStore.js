import { createStore } from 'redux';
import rootReducer from '../reducers';
import reduxThunk from 'redux-thunk';
//debug
import { applyMiddleware } from 'redux';
import logger from 'redux-logger'

export default createStore(
  rootReducer,
  applyMiddleware(reduxThunk,logger),
);

