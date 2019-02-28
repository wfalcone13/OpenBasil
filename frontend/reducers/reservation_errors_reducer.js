import { RECEIVE_RES_ERRORS } from '../actions/reservation_actions'



export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RES_ERRORS:
      return action.errors;
    default:
      return state;
  }
}