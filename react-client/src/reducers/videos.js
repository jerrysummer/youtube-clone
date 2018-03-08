import { SEARCH } from '../helpers/constants';

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return action.payload;
    default:
      return state;
  }
}


const initialState = [];
