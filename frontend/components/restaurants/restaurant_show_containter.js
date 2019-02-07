import {connect} from 'react-redux';
import {fetchRestaurant} from '../../actions/restaurant_actions'
import RestaurantShow from './restaurant_show'



const mapStateToProps = (state, ownProps) => {
  return {
    restaurant: state.entities.restaurants[ownProps.match.params.restaurantId] || {},

  }
}

const mapDistpatchToProps = dispatch => {
  return {
    fetchRestaurant: id => dispatch(fetchRestaurant(id))
  }
}

export default connect(mapStateToProps,mapDistpatchToProps)(RestaurantShow)