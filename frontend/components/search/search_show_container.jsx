import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { fetchRestaurants, searchRestaurants } from '../../actions/restaurant_actions'
import SearchResults from './search_show'


const mapStateToProps = (state, ownProps) => {
  
  return {
    rests: Object.values(state.entities.restaurants),
    reservation: {
      user_id: state.session.id, restaurant_id: ownProps.match.params.restaurantId,
      reservation_time: '', reservation_date: '', seating_number: ''
    }

  }
}


const mapDispatchToProps = dispatch => {
  return {
    // fetchRestaurants: () => dispatch(fetchRestaurants()),
    searchRestaurants: (query) => dispatch(searchRestaurants(query))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResults))
