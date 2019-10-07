import { combineReducers } from 'redux';
import user from './user';

export const GET_USER = 'GET_USER';

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
