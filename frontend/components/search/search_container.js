import {connect} from 'react-redux';
import { fetchRestaurants, fetchRestaurant, searchRestaurants } from '../../actions/restaurant_actions';
// import { searchRestaurants} from '../../actions/search_actions'
import Search from './search';

// const mapStateToProps = state =>{
//   
//   return {
//     reservation: {
//       user_id: state.session.id,
//       reservation_time: '', reservation_date: '', seating_number: ''
//     },
  
//   }
// }

const mapDispatchToProps = dispatch => {
  
  return {
    search: (query) => dispatch(searchRestaurants(query))
  };
};

export default connect(null, mapDispatchToProps)(Search)