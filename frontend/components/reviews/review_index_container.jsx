import { connect } from 'react-redux';
import ReviewIndex from './review_index'
import { fetchReviews} from '../../actions/review_actions'

const mapStateToProps = (state, ownProps) => {
  const restaurant = state.entities.restaurants[ownProps.match.params.restaurantId] || { review_ids: []}
  const reviewIds = restaurant.review_ids;
  let reviewInfo = [];
  reviewIds.forEach(id => {
    const rev = state.entities.reviews[id];
    if (rev) {
      reviewInfo.push(rev);
    }

  })
  return{
    user_email: state.entities.users[state.session.id].email,
    // restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
    reviews: reviewInfo 
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    fetchReviews: reviews => dispatch(fetchReviews(reviews))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex)