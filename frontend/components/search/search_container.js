import {connect} from 'react-redux';
import { fetchRestaurants, fetchRestaurant } from '../../actions/restaurant_actions';
import { searchRestaurants} from '../../actions/search_actions'
import Search from './search';

const mapStateToProps = state =>{
  debugger
  return {
    restaurants: Object.values(state.entities.restaurants) 
  
  }
}

const mapDispatchToProps = dispatch => {
  debugger
  return {
    searchRestaurants: (query) => dispatch(searchRestaurants(query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)