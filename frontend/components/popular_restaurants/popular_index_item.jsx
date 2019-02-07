import React from 'react';
import {Link} from 'react-router-dom';


  class PopularIndexItem extends React.Component{
      constructor(props){
        super(props)
      }

  
    
    render(){
      return (
      <div className='res-info'>
        <img src={this.props.restaurant.photoURL}/>
        <Link to={`/restaurants/${this.props.restaurant.id}`}>{this.props.restaurant.name}</Link>
        <div className="star-ratings">
            <p>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              </p>
          <p className='star-ps'>Reviews {this.props.restaurant.review_count}</p>
        </div>
          <div className="ratings">
            {this.props.restaurant.category}
          <p>$$$</p>
          {this.props.restaurant.location.split(',')[1]}
         </div> 
     
      </div>
      )

  }

}







export default PopularIndexItem