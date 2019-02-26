import {connect } from 'react-redux';
import { createReview} from '../../actions/review_actions'
import { openModal, closeModal } from '../../actions/modal_actions'
import ReviewForm from './review_form'
import { withRouter } from 'react-router-dom'



const mapStateToProps = (state) => {

   
  let fName = state.entities.users[state.session.id].first_name;
  let lName = state.entities.users[state.session.id].last_name;

  return{
    review: {
      user_id: state.session.id, restaurant_id: state.ui.modal.id,
      title: "", body: "", stars: "", user_first: fName, user_last: lName } 
    
    

  }
}


const mapDispatchToProps = dispatch => {
  return {
    createReview: review => dispatch(createReview(review)),
    closeModal: () => dispatch(closeModal())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm))