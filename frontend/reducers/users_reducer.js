import merge from 'lodash/merge';

import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_RESERVATION} from '../actions/reservation_actions'

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser});
    case RECEIVE_RESERVATION: 
      return merge({}, state, action.user)
    default:
      return state;
  }
}

export default usersReducer 