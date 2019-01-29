import * as restaurantAPIUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';

export const receiveRestaurant = (restaurant) =>{
  return{
    type: RECEIVE_RESTAURANT,
    restaurant: restaurant
  }
}


export const receiveRestaurants = (restaurants) => {
  return {
    type: RECEIVE_RESTAURANTS,
    restaurants: restaurants
  }
}

export const fetchRestaurants = () => dispatch => {
  return restaurantAPIUtil.fetchRestaurants()
    .then(restaurants => dispatch(receiveRestaurants(restaurants)))
}

export const fetchRestaurant = (id) => dispatch => {
  return restaurantAPIUtil.fetchRestaurant(id)
    .then(restaurant => dispatch(receiveRestaurant(restaurant)))
}



