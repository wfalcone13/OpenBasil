import React from 'react';

const month = [0,'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


class ReviewIndexItem extends React.Component{
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteReview(this.props.review.id).then(result =>{
      this.props.history.push(`restaurants/${this.props.review.restaurant_id}`)
    })
  }

  starRender() {
    switch (this.props.review.stars) {
      case 1:
        return <p> <i className="fas fa-star" id="res-stars" ></i > </p>;
      case 2:
        return (<p>
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

  dinedOn(){
    let d = this.props.review.created_at.split("-")[2].slice(0,2);
    let m = this.props.review.created_at.split("-")[1];
    let y = this.props.review.created_at.split("-")[0];
    return month[parseInt(m)] + " " + d + ", " + y;
    
  }


  render(){
    
    
    return(
      <div className="user-review">

        <div className="user-rev-email">
            <div className='email-name-over'>
                 <i className="fas fa-circle" id='red-circ'></i>
                 <p className="email-names">{this.props.review.user_first[0]}{this.props.review.user_last[0]}</p>
            </div>
            <div className='user-bottom-email'>
              {this.props.review.user_first}
              <p id='city'> New York Area </p>
            </div>
        </div>

        <div className="user-rev-info">
          <div className="dined-when">
            <h1>{this.starRender()}</h1>
            <h1>Dined on {this.dinedOn()} </h1>
          </div>
          <p>Title: {this.props.review.title}</p>
          <div>
            {this.props.review.body}
          </div>
        </div>


        {/* <button onClick={this.handleDelete}>Delete</button> */}

      </div>
    )
  }
}

export default ReviewIndexItem