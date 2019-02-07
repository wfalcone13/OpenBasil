import React from 'react';
import {Link} from 'react-router-dom';
import ReservationCreateContainer from '../reservations/reservation_create_container'
import ReviewIndexContainer from '../reviews/review_index_container'

let tags = ['Special Occasion', 'Fun', 'Good Food', 'Great Service', 'Yum!']

class RestaurantShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    // 
    this.props.fetchRestaurant(this.props.match.params.restaurantId)
  }

  topTags(){
    //this will be to generate tags depending on rating and category
  }

  render(){
    return (
    
      <div className="rests-container">

        <div className='rests-photo' >
          <img src="https://s3.amazonaws.com/open-basil-dev/toptop/pasta.jpg" alt="" className="photo-one"/>
            <img src={this.props.restaurant.photoURL} alt=""/>
          <img src="https://s3.amazonaws.com/open-basil-dev/toptop/pizza.jpg" alt="" className="photo-one"/>
        </div>

        <div className="rest-info-rsvp-review">

          <div className="rest-info-display">

            <div className='rests-links'>

              <ul className='rest-links-list'>
                <li>Overview</li>
                <li>Photos</li>
                <li>Menu</li>
                <li>Specials</li>
                <li>Reviews</li>
                <li>Twitter</li>
              </ul>

            </div>

            <div className="rest-info-cont">

              <div className="rest-info">
                <h2>{this.props.restaurant.name}</h2>
              </div>

            </div>

            <div className='rest-quick-facts'>

              <div>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>

              <div className="quick-facs-rating">
                <p>{this.props.restaurant.rating}</p>
              </div>
              <div className="quick-facs-reviews">
                <i className="far fa-comment-alt"></i>
                <p>{this.props.restaurant.review_count} reviews</p>
              </div>
              <div className="quick-facs-money">
                <i className="fas fa-money-bill"></i>
                <p>${this.props.restaurant.price * 7} to ${this.props.restaurant.price * 9}</p>
              </div>
              <div className="quick-facs-cat">
                <i className="fas fa-utensils"></i>
                <p>Italian</p>
              </div>
            </div>
              <div className='rest-tags'>
                <div className='rest-tag-head'>
                  <p>Top Tags:</p>
                </div>
                <div className='rest-tag-option'>
                <p>Special Occasion</p>
                </div>
                <div className='rest-tag-option'>
                <p>Yum!</p>
                </div>
                <div className='rest-tag-option'>
                <p>Good Food</p>
                </div>
              </div>
              <div className='rest-descrip'>
                <div>
                  {this.props.restaurant.name} is a 
                  neighborhood, {this.props.restaurant.category}  inspired restaurant. We use the best ingredients and provide a great atmosphere. 
                  Looking forward to hosting you soon!
                </div>
              </div>
          </div>

          <div className='resvp-container'>
            <ReservationCreateContainer/>
          </div>

      </div>
        {/* <div>
          <ReviewIndexContainer/>
        </div> */}
    </div>  
   
    )
  }
}

export default RestaurantShow;