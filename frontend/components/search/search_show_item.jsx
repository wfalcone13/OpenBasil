import React from 'react';
import { Link } from 'react-router-dom';

class SearchResultItem extends React.Component{
  constructor(props){
    super(props)
  }

     starRender(){
      switch (this.props.rest.rating) {
        case 1:
          return <p> <i className = "fas fa-star" id = "res-stars" ></i > </p>;
        case 2:
          return( <p>
                  <i className="fas fa-star" id="res-stars" ></i >
                  <i className="fas fa-star" id="res-stars" ></i >
          </p>)
        case 3:
          return (<p>
            <i className="fas fa-star" id="res-stars" ></i >
            <i className="fas fa-star" id="res-stars" ></i >
            <i className="fas fa-star" id="res-stars" ></i >
          </p>) 
        case 4:
          return (<p>
            <i className="fas fa-star" id="res-stars" ></i >
            <i className="fas fa-star" id="res-stars" ></i >
            <i className="fas fa-star" id="res-stars" ></i >
            <i className="fas fa-star" id="res-stars" ></i >
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

  moneyRating() {
    switch (this.props.rest.price) {
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
    
    return(
      <div className='rest-result'>
        <div className='img-result'>
          <Link to={`/restaurants/${this.props.rest.id}`}><img src={this.props.rest.photoURL}/></Link>
        </div>
        <div className='info-result'>
          <div className='info-name'>
            <Link to={`/restaurants/${this.props.rest.id}`}> {this.props.rest.name}</Link>
          </div>
          <div className='rat-result'>
            {this.starRender()}
            {this.moneyRating()}
          </div>
          <div className='cat-result'>
            {this.props.rest.category}
          </div>
          <div>
          </div>
        </div>
      </div>
    )
  }

}

export default SearchResultItem;