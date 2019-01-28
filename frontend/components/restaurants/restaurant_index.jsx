import React from 'react';
import RestaurantIndexItem from './restaurant_index_item'; 

class RestaurantIndex extends React.Component {
  constructor(props){
    super(props)
    this.props = props.restaurants
  }

  componentDidMount(){
    props.fetchRestaurants()
  }

  render (){
    debugger
    return (
      <div>
        <ul>
          {this.props.restaurants.map(restaurant => {
            return <RestaurantIndexItem restaurant={restaurant}
            key={restaurant.id}
            />
          })}
        </ul>
      </div>
    )
    }
  }

export default RestaurantIndex