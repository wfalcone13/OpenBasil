export const fetchReservations = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/reservations'
  })
}