import React from 'react';
import RestaurantIndex from '../restaurants/restaurant_index';
import SearchField from "react-search-field";

const Search = ({restaurants}) => {
  

  return(
    <div className="search-container">
      <h1>Find your table for any occasion</h1>
      <div className="search-bar-main">

        <form action="" className="search-date">
          <input type="date" name="date" />
        </form>

        <form action="" className="search-time"> 
          <input type="time" name="time" />
        </form> 

        <form action="" className="search-bar-number">
          <input type="number" name="number" min='1' max='15' />
        </form>  

        <form action="" className="search-bar">
          <input type="text" name="search" placeholder="Search...."/>
          <button className="search-button">Let's go</button>
        </form>
      </div>
    </div>
  )
}

export default Search;