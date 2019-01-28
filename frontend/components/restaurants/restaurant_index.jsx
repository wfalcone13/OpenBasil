import React from 'react';
import RestaurantIndexItem from './restaurant_index_item'; 

class RestaurantIndex extends React.Component {
 

  componentDidMount(){
    this.props.fetchRestaurants()
  }

  render (){
    
    return (
      <div>
        <ul>
          <li>
          {this.props.restaurants.map(restaurant => {
            return <RestaurantIndexItem restaurant={restaurant}
            key={restaurant.id}
            />
            
          })}
          </li>
        </ul>
      </div>
    )
    }
  }

export default RestaurantIndex