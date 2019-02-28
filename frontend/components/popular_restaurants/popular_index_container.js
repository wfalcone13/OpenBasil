import {connect} from 'react-redux';
import { fetchRestaurants, fetchRestaurant} from '../../actions/restaurant_actions';
import PopularIndex from './popular_index'

const mapStateToProps = state => {

  // // const rateIds = state.entities.restaurants.review_ids;
  // let rates = [];

  // rateIds.forEach(i =>{

  // })
  debugger
  return {
    restaurants: Object.values(state.entities.restaurants),
    currentUser: state.entities.users[state.session.id],
    
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    fetchRestaurants: () => dispatch(fetchRestaurants())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopularIndex)