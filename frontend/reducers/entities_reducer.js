import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import restaurantReducer from './restaurants_reducer'
import reservationReducer from './reservations_reducer'

export default combineReducers({
  users: usersReducer,
  restaurants: restaurantReducer,
  reservations: reservationReducer
})