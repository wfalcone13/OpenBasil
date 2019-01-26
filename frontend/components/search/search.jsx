import React from 'react';
// import RestaurantIndex from '../restaurants/restaurant_index';

const Search = ({restaurants}) => {
  return(
    <section className="search-bar-container">
      <div className="search-option">
      <h3>Find your table for any occasion</h3>
        <div className="so-options">
          <button className="date-drop">
            date picker
          </button>
          <button className="time-drop">
            time picker
          </button>
          <button className="res-num-drop">
            Res number
          </button>
          <span className="search-field">
            <form > 
                <input placeholder="Search for..."
                />
            </form>
          </span>
        </div>
      </div>
    </section>



  )
}

export default Search;