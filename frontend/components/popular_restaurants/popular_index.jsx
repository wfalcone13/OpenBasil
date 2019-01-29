import React from 'react';
import PopularIndexItem from './popular_index_item'; 
import { logoutCurrentUser } from '../../actions/session_actions';

class PopularIndex extends React.Component {
 

  componentDidMount(){
    this.props.fetchRestaurants()
  }

  render (){
    
    return (
      <div className="pop-comp">
        <div className='border-h2'>
        <h2 className="pop-h2">Popular restaurants in {this.props.currentUser.primary_location}</h2>
        </div>
      <div className="res-box">
        <ul>
          <li className="pop-res-info">
          {this.props.restaurants.slice(0,5).map(restaurant => {
            return <PopularIndexItem restaurant={restaurant}
            key={restaurant.id}
            />
            
          })}
          </li>
        </ul>
      </div>
      </div>
    )
    }
  }

export default PopularIndex