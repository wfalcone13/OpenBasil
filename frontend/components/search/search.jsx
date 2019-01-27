import React from 'react';
import RestaurantIndex from '../restaurants/restaurant_index';
import SearchField from "react-search-field";

const Search = ({restaurants}) => {
  
  debugger
  return(
    <div>
    <RestaurantIndex restaurants={restaurants}/>
    </div>
  )
}

export default Search;