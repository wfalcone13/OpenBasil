import * as restaurantAPIUtil from '../util/restaurant_api_util';

export const FETCH_RESTAURANT = 'FETCH_RESTAURANT';
export const FETCH_RESTAURANTS = 'FETCH_RESTAURANTS';

export const receiveRestaurant = (restaurant) =>{
  return{
    type: RECEIVE_RESTAURANT,
    restaurant: restaurant
  }
}


export const receiveRestaurants = () => {
  return {
    type: RECEIVE_RESTAURANTS
  }
}

