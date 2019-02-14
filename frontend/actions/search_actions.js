import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_RESTAURANT_SEARCH = 'RECEIVE_RESTAURANT_SEARCH';
export const RECEIVE_SEARCH_ERRORS = 'RECEIVE_SEARCH_ERRORS';
export const CLEAR_SEARCH_ERRORS = 'CLEAR_SEARCH_ERRORS';

const receiveRestaurantSearch = restaurants => {
  return {
    type: RECEIVE_RESTAURANT_SEARCH,
    restaurants
  }
}

const receiveSearchErrors = errors =>{
  return{
    type: RECEIVE_SEARCH_ERRORS,
    errors
  }
}

export const clearSearchErrors = () =>{
  return {
    type: CLEAR_SEARCH_ERRORS
  }
}


export const searchRestaurants = query =>{
  return dispatch =>{
    return SearchAPIUtil.searchRestaurants(query).then(response => {
      return dispatch(receiveRestaurantSearch(response.restaurants))
    },
    (errors) => {
      return dispatch(receiveSearchErrors(errors));
    });
  }
}