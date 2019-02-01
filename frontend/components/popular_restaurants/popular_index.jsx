import React from 'react';
import PopularIndexItem from './popular_index_item'; 
import { logoutCurrentUser } from '../../actions/session_actions';

class PopularIndex extends React.Component {
  

  componentDidMount(){
    this.props.fetchRestaurants()
  }

  greetingLocation(){
    if(currentUser){
      return(
        this.props.currentUser.primary_location
      )
    }else{
      return( 'New York')
    }
  }

  shuffleRests(rest){
      let j, x, i;
      for (i = rest.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = rest[i];
        rest[i] = rest[j];
        rest[j] = x;
      }
      return rest;
  }

  render (){
    
    return (
      <div className="pop-comp">
        <div className='border-h2'>
        <h2 className="pop-h2">Recently viewed</h2>
        </div>
      <div className="res-box">
        <ul className="res-ul">
          <li className="pop-res-info">
          {this.shuffleRests(this.props.restaurants).slice(0,4).map(restaurant => {
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