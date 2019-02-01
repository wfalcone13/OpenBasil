import {connect} from 'react-redux';
import ReservationForm from './reservation_form'
import {createReservation} from '../../actions/reservation_actions'
import {withRouter} from 'react-router-dom'


const mapStateToProps = (state, ownProps) =>{
  
  return{
    reservation: { user_id: state.session.id, restaurant_id: ownProps.match.params.restaurantId,  
      reservation_time: '', reservation_date: '', seating_number: ''},
      
   

  }
}

const mapDispatchToProps = dispatch => {
  return{
    createReservation: reservation => dispatch(createReservation(reservation))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReservationForm))