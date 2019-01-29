import React from 'react';
import {Link} from 'react-router-dom';


class RestaurantShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchRestaurant(this.props.match.params.restaurantId)
  }

  render(){
    return (
      <div>
        <div className="rests-container">
          <div className='rests-photos'>
            <div className='photos-1'>
              <img src="https://www.nycgo.com/images/venues/6681/lilia-assorted-dishes-1__x_large.jpg" alt=""/>
              <img src="https://static01.nyt.com/images/2016/03/30/dining/30REST-LILIA-slide-31ZE/30REST-LILIA-slide-31ZE-articleLarge.jpg?quality=75&auto=webp&disable=upscale" alt=""/>
            </div>
            <div className='photos-2'> 
              <img src={this.props.restaurant.photoURL} />
            </div>
            <div className='photos-1'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdkYtjC41svvTzdM3KOb9xwS3QF0_IiuSrLy2PE-dnPBak2CUF" alt="" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8OIWRqHvMwS7rLY1QfciEj5iP7LYxUB4tN5JDbqSq6t3j7wx" alt="" />
            </div>
            <div className='photos-3'>
              <img src={this.props.restaurant.photoURL} alt=""/>
            </div>
            <div className='photos-1'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdkYtjC41svvTzdM3KOb9xwS3QF0_IiuSrLy2PE-dnPBak2CUF" alt=""/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8OIWRqHvMwS7rLY1QfciEj5iP7LYxUB4tN5JDbqSq6t3j7wx" alt=""/>
            </div>
            <div className='photos-5'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEHGXTB9T-brq66xilTkpuB2vAePqVuKYBxxvKEjrDvo1RYr9D" alt=""/>
            </div>
          </div>

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
            
          </div>
        </div>
      </div>  
    )
  }
}

export default RestaurantShow;