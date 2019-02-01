import { connect } from 'react-redux';
import ReservationIndex from './reservation_index';
import { fetchReservation, fetchReservations, deleteReservation} from '../../actions/reservation_actions'
import {fetchRestaurants} from '../../actions/restaurant_actions'
import {withRouter} from 'react-router-dom'


const mapStateToProps = ({session, entities: { users, reservations, restaurants }}) => {
  const reservationIds = users[session.id].reservation_ids
  let rsvps = [];
  reservationIds.forEach(id => {
   const res = reservations[id];
  //  res[rest] = state.entities.restaurants[res[restaurant_id]]
    if (res){
      rsvps.push(res);
    }    
      
  })
  return {
    restaurants: restaurants,
    rsvps,
    user_name: users[session.id].first_name
    // reservations: state.entities.reservations,
    // restaurant: state.entities.restaurants[state.entities.reservations[reservations_id].restaurant_id]
  }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    fetchReservation: id => dispatch(fetchReservation(id)),
    fetchReservations: () => dispatch(fetchReservations()),
    deleteReservation: (id) => dispatch(deleteReservation(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReservationIndex))

