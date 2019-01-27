import {connect} from 'react-redux';
import { fetchRestaurants, fetchRestaurant} from '../../actions/restaurant_actions';
import RestaurantIndex from './restaurant_index'

const mapStateToProps = state => {
  debugger
  return {
    restaurants: Object.values(state.entities.restaurants) 
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    fetchRestaurants: () => dispatch(fetchRestaurants())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex)