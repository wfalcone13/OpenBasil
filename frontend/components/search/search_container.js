import {connect} from 'react-redux';
import { fetchRestaurants, fetchRestaurant, searchRestaurants } from '../../actions/restaurant_actions';
// import { searchRestaurants} from '../../actions/search_actions'
import Search from './search';

// const mapStateToProps = state =>{
//   debugger
//   return {
//     restaurants: Object.values(state.entities.restaurants) 
  
//   }
// }

const mapDispatchToProps = dispatch => {
  
  return {
    search: (query) => dispatch(searchRestaurants(query))
  };
};

export default connect(null, mapDispatchToProps)(Search)