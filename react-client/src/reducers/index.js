import { combineReducers } from 'redux';
import history from './history';
import videos from './videos';
import currentVideo from './currentVideo';

const rootReducer = combineReducers({
  videos,
  currentVideo,
});

export default rootReducer;
