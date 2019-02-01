export const fetchReviews = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/reviews'
  })
}

export const createReview = (review) =>{
  return $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: {review}
  })
}