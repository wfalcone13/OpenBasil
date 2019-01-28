import {connect} from 'react-redux';
import { fetchRestaurants, fetchRestaurant } from '../../actions/restaurant_actions';
import Search from './search';

const mapStateToProps = state =>{
  return {
    restaurants: Object.values(state.entities.restaurants) 
  
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurants())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)