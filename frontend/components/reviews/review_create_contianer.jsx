import {connect } from 'react-redux';
import { createReview} from '../../actions/review_actions'
import { openModal, closeModal } from '../../actions/modal_actions'
import ReviewForm from './review_form'


const mapStateToProps = (state, ownProps) => {
  return{
    review: { user_id: state.session.id, restaurant_id: ownProps.match.params.restaurantId,
    title: "", body: "", stars: "" }
  }
}


const mapDispatchToProps = dispatch => {
  return {
    createReview: review => dispatch(createReview(review)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)