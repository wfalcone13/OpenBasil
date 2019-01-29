import React from 'react';
import RestaurantIndexItem from './restaurant_index_item'; 

class RestaurantIndex extends React.Component {
 

  componentDidMount(){
    this.props.fetchRestaurants()
  }

  render (){
    
    return (
      <div className="pop-comp">
        <h2 className="pop-h2">Popular restaurants in (location)</h2>

      <div className="res-box">
        <ul>
          <li className="pop-res-info">
          {this.props.restaurants.map(restaurant => {
            return <RestaurantIndexItem restaurant={restaurant}
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

export default RestaurantIndex