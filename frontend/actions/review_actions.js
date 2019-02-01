import * as reviewAPIUtil from '../util/review_api_util';


export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

const receiveReviews = (reviews) => {
  return{
  type: RECEIVE_REVIEWS,
  review 
  }
}

const recieveReview = ({ review, restaurant}) => {
  return{
    type: RECEIVE_REVIEW,
    review,
    restaurant
  }
}

export const fetchReviews = () => dispatch => {
  return reviewAPIUtil.fetchReviews()
    .then(reviews => dispatch(receiveReviews(reviews)))
}

export const createReview = (review) => dispatch => {
  return reviewAPIUtil.createReview(review)
    .then(review => dispatch(recieveReview(review)))
}