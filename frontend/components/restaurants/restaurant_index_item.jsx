import React from 'react';
import {Link} from 'react-router-dom';


  const RestaurantIndexItem = props => {

      return (
      <div>
        <Link to={`/api/restaurants/${props.restaurant.id}`}>{props.restaurant.name}</Link>
        {props.restaurant.location}
        {props.restaurant.photo}
     
      </div>
      )

  }







export default RestaurantIndexItem