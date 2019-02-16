import React from 'react';


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


  render(){
    
    
    return(
      <div className="user-review">

        <div className="user-rev-email">
          <i className="fas fa-circle" id='red-circ'>
          {/* <p>{this.props.review.user_first}{this.props.review.user_last}</p> */}
          </i>
          {this.props.review.email}
         <p> New York Area </p>
        </div>

        <div className="user-rev-info">
          <p>Title: {this.props.review.title}</p>
          <div>
            {this.props.review.body}
          </div>
        </div>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

export default ReviewIndexItem