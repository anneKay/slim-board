import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './authReducer';
import story from './storyReducer';

const rootReducer = history =>
  combineReducers({
    auth,
    story,
    router: connectRouter(history),
  });

export default rootReducer;
