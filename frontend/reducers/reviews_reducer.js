import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW} from '../actions/review_actions'
import { RECEIVE_RESTAURANT} from '../actions/restaurant_actions'
import merge from 'lodash/merge';


const reviewReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews 
    case RECEIVE_REVIEW:
    return merge({}, state, action.review)
    case RECEIVE_RESTAURANT:
      return merge({}, state, action.reviews)
    case REMOVE_REVIEW:
    
      let newState = merge({}, state);
      delete newState[action.reviewId]
      return newState 
    default:
      return state;
  }
}

export default reviewReducer