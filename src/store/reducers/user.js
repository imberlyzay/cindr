import { GET_USER } from './rootreducer';

//ACTION CREATORS
export const getUser = user => ({
  type: GET_USER,
  user,
});

//THUNK CREATORS
export const getUserThunk = () => {
  return async dispatch => {
    try {
      const userData = await //from firebase
      dispatch(getUser(userData));
    } catch (error) {
      console.error(error);
    }
  };
};

//REDUCER
export default function user(state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    default:
      return state;
  }
}
