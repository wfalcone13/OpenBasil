import React from 'react';
import {connect} from 'react-redux';
import { fetchReservation, updateReservation} from '../../actions/reservation_actions';
import ReservationShow from './reservation_edit'

const mapStateToProps = (state, ownProps) =>{
  return{
    reservation: state.entities.reservation[ownProps.match.params.reservationId]
  }
}

const mapDistpatchToProps = dispatch =>{
  return{
    fetchReservation: id => dispatch(fetchReservation(id)),
    updateReservation: reservation =>dispatch(updateReservation(reservation))
  }
}

export default connect(mapStateToProps, mapDistpatchToProps)(ReservationShow);