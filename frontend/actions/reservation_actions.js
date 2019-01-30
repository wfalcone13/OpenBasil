import * as reservationAPIUtil from '../util/reservation_api_util'

export const RECEIVE_ALL_RESERVATIONS = 'RECEIVE_ALL_RESERVATIONS';
export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';

const receiveAllReservations = (reservations) => {
  return{
    type: RECEIVE_ALL_RESERVATIONS,
    reservations: reservations
  }
}

const receiveReservation = ({reservation, user, restaurant}) => {
  return{
    type: RECEIVE_RESERVATION,
    reservation,
    user,
    restaurant
  }
}

const removeReservation = (reservationId) => {
  return{
    type: REMOVE_RESERVATION,
    reservationId: reservationId
  }
}

export const fetchReservations = () => dispatch =>{
  return reservationAPIUtil.fetchReservations()
    .then(reservations => dispatch(receiveAllReservations(reservations)))
}

export const fetchReservation = (reservation) => dispatch => {
  return reservationAPIUtil.fetchReservation(reservation)
    .then(reservation => dispatch(receiveReservation(reservation)))
}

export const createReservation = (reservation) => dispatch => {
  return reservationAPIUtil.createReservation(reservation)
    .then(reservation => dispatch(receiveReservation(reservation)))
}

export const updateReservation = (reservation) => dispatch => {
  return reservationAPIUtil.updateReservation(reservation)
    .then(reservation => dispatch(receiveReservation(reservation)))
}

export const deleteReservation = (ReservationId) => dispatch => {
  return reservationAPIUtil.deleteReservation(ReservationId)
    .then(reservation => dispatch(removeReservation(ReservationId)))
}