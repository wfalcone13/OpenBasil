import {connect } from 'react-redux';
import { createReview} from '../../actions/review_actions'
import { openModal, closeModal } from '../../actions/modal_actions'
import ReviewForm from './review_form'
import { withRouter } from 'react-router-dom'



const mapStateToProps = (state) => {
  return{
    review: {
      user_id: state.session.id, restaurant_id: state.ui.modal.id,
    title: "", body: "", stars: "" },
   
  }
}


const mapDispatchToProps = dispatch => {
  return {
    createReview: review => dispatch(createReview(review)),
    closeModal: () => dispatch(closeModal())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm))