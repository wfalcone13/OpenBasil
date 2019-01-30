import { RECEIVE_ALL_RESERVATIONS, RECEIVE_RESERVATION, REMOVE_RESERVATION} from '../actions/reservation_actions'
import merge from 'lodash/merge';

const reservationReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALL_RESERVATIONS:
      return action.reservations 
    case RECEIVE_RESERVATION:
      return merge({}, state, action.reservation)
    case REMOVE_RESERVATION:
      let newState = merge({}, state)
      delete newState[action.reservationId]
      return newState
    default:
      return state;
  }
}

export default reservationReducer;