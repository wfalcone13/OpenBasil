import React from 'react'
import {connect} from 'react-redux';
import { searchRestaurants} from '../../actions/restaurant_actions'

const topNear = () => {
  return(

    <div className="top-c">
      <div className="top-c-head">
        <p >Top Cusines near Manhattan </p>
      </div>
      <div className='top-buckets'>
          <div className="cat-1">
            <p>Best Pasta Restaurants Around you</p>
          </div>
        <div className="cat-2">
          <p>Best Pizza Restaurants Around you</p>
        </div>
        <div className="cat-3">
          <p>Best Red Sauce Restaurants Around you</p>
        </div>
        <div className="cat-4">
          <p>Best Best Restaurants Around you</p>
        </div>
        <div className="cat-4">
          <p>Best Best Restaurants Around you</p>
        </div>
        <div className="cat-5">
        </div>
      </div>

    </div>
  )
}

const mapDispatchToProps = dispatch =>{
  
  return {
    search: (pizza) => dispatch(searchRestaurants(pizza))
  }
}

export default connect(null, mapDispatchToProps)(topNear);