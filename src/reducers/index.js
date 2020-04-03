import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer from './authReducer';

const rootReducer = history =>
  combineReducers({
    authReducer,
    router: connectRouter(history),
  });

export default rootReducer;
