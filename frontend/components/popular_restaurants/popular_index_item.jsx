import React from 'react';
import {Link} from 'react-router-dom';


  class PopularIndexItem extends React.Component{
      constructor(props){
        super(props)
        
      }

    starRender(){
      
      let star = 0 ;
      if (this.props.restaurant.reviewRating !== undefined){
      this.props.restaurant.reviewRating.forEach(r =>{
        star += r.stars;
      })
    }

      
      star = Math.round(star / this.props.restaurant.reviewRating.length)

      
      switch (star) {
        case 1:
          return <p> <i className = "fas fa-star" id = "res-stars" ></i > 
                    <i className="fas fa-star" id="grey-stars" ></i >
                    <i className="fas fa-star" id="grey-stars" ></i >
                    <i className="fas fa-star" id="grey-stars" ></i >
                    <i className="fas fa-star" id="grey-stars" ></i > 
          
          </p>;
        case 2:
          return( <p>
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

    moneyRating(){
      switch (this.props.restaurant.price) {
        case 1:
          return "$"
        case 2:
          return "$"  
        case 3:
          return "$$"
        case 4:
          return "$$"
        case 5:
          return "$$$"
        case 6:
          return "$$$" 
        case 7:
          return "$$$$"
        case 8:
          return "$$$$$ "       
        default:
          break;
      }
    }





  
    
    render(){
      
      return (
      <div className='res-info'>
        <Link to={`/restaurants/${this.props.restaurant.id}`}> 
            <img src={this.props.restaurant.photoURL} />
            <p className='rest-title'>{this.props.restaurant.name}</p>
        <div className="star-ratings">
            {this.starRender()}
          <p className='star-ps'>{this.props.restaurant.review_ids.length} reviews</p>
        </div>
          <div className="ratings">
            {this.props.restaurant.category}
          <p>{this.moneyRating()}</p>
          {this.props.restaurant.location.split(',')[1]}
         </div> 
     
          </Link>
      </div>
      )

  }

}







export default PopularIndexItem