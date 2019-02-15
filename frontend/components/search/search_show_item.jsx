import React from 'react';

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
      <div>
        <div>
          <img src={this.props.rest.photoURL}/>
        </div>
        <div>
          <div>
            {this.props.rest.name}
          </div>
          <div>
            {this.starRender()}
            {this.moneyRating()}
          </div>
          <div>
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