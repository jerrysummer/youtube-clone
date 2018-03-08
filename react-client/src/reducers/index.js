import { combineReducers } from 'redux';
import history from './history';
import videos from './videos';

const rootReducer = combineReducers({
  videos
});

export default rootReducer;
