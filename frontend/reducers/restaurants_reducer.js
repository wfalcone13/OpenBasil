import { RECEIVE_RESTAURANT, RECEIVE_RESTAURANTS } from '../actions/restaurant_actions'
import {RECEIVE_ALL_RESERVATIONS} from '../actions/reservation_actions';
import { RECEIVE_REVIEW} from '../actions/review_actions'
import merge from 'lodash/merge';

const restaurantReducer = (state  = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      return action.restaurants
    case RECEIVE_RESTAURANT:
      return merge({}, state, action.restaurant)
    case RECEIVE_ALL_RESERVATIONS:
      return merge({}, state, action.restaurants)
      case RECEIVE_REVIEW:
        return merge({}, state, action.restaurant)
    default:
      return state;
  }
}

export default restaurantReducer;