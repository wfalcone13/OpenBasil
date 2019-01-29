import React from 'react';

class PopularIndex extends React.Component {
  
  componentDidMount(){
    this.props.fetchRestaurants()
  }


  render (){
    return (
      <ul>
        <li>
        {props.restaurants.map(restaurant => {
          return restaurant.name;
        })}
        </li>
      </ul>
    )
  }

}

export default PopularIndex;