import React from 'react';
import {Link} from 'react-router-dom';
import ReservationCreateContainer from '../reservations/reservation_create_container'
import ReviewIndexContainer from '../reviews/review_index_container'

let tags = ['Special Occasion', 'Fun', 'Good Food', 'Great Service', 'Yum!']
let star = -1;

class RestaurantShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    
    
    this.props.fetchRestaurant(this.props.match.params.restaurantId)
    star += 1
    
    
  }

  starRender() {

    

    // let star = 0;
    // this.props.restaurant.reviewRating.forEach(r => {
    //   star += r.stars;
    // })

    if (star === 0){
      this.props.restaurant.reviewRating.forEach(r => {
      star += r.stars;
    })
    star = Math.round(star / this.props.restaurant.reviewRating.length)
    }

    switch (star) {
      case 1:
        return <p> <i className="fas fa-star" id="res-stars" ></i >
          <i className="fas fa-star" id="grey-stars" ></i >
          <i className="fas fa-star" id="grey-stars" ></i >
          <i className="fas fa-star" id="grey-stars" ></i >
          <i className="fas fa-star" id="grey-stars" ></i >

        </p>;
      case 2:
        return (<p>
          <i className="fas fa-star" id="res-stars" ></i >
          <i className="fas fa-star" id="res-stars" ></i >
          <i className="fas fa-star" id="grey-stars" ></i >
          <i className="fas fa-star" id="grey-stars" ></i >
          <i className="fas fa-star" id="grey-stars" ></i >
        </p>)
      case 3:
        return (<p>
          <i className="fas fa-star" id="res-stars" ></i >
          <i className="fas fa-star" id="res-stars" ></i >
          <i className="fas fa-star" id="res-stars" ></i >
          <i className="fas fa-star" id="grey-stars" ></i >
          <i className="fas fa-star" id="grey-stars" ></i >
        </p>)
      case 4:
        return (<p>
          <i className="fas fa-star" id="res-stars" ></i >
          <i className="fas fa-star" id="res-stars" ></i >
          <i className="fas fa-star" id="res-stars" ></i >
          <i className="fas fa-star" id="res-stars" ></i >
          <i className="fas fa-star" id="grey-stars" ></i >
        </p>)
      case 5:
        return (<p>
          <i className="fas fa-star" id="res-stars" ></i >
          <i className="fas fa-star" id="res-stars" ></i >
          <i className="fas fa-star" id="res-stars" ></i >
          <i className="fas fa-star" id="res-stars" ></i >
          <i className="fas fa-star" id="res-stars" ></i >
        </p>)
      default:
        break;
    }

  }

  reviewCount(){
    
   let count = 0 
    if (this.props.restaurant.review_ids === undefined){
      return <p>0 Reviews</p>
    } else {
    this.props.restaurant.review_ids.forEach(rev => {
      count +=1 
    })
    return (<p>{`${count} Reviews`} </p>  )
    }
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

            {/* <div className='rests-links'>

              <ul className='rest-links-list'>
                <li>Overview</li>
                <li>Photos</li>
                <li>Menu</li>
                <li>Specials</li>
                <li>Reviews</li>
                <li>Twitter</li>
              </ul>

            </div> */}

            <div className="rest-info-cont">

              <div className="rest-info">
                <h2>{this.props.restaurant.name}</h2>
              </div>

            </div>

            <div className='rest-quick-facts'>

              <div>
                {this.starRender()}
              </div>

              <div className="quick-facs-rating">
                <p>{star}</p>
              </div>
              <div className="quick-facs-reviews">
                <i className="far fa-comment-alt"></i>
                {/* <p>5 reviews</p> */}
                {this.reviewCount()}
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
                  {this.props.restaurant.description}
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