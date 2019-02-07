import React from 'react';


class ReviewIndexItem extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    
    return(
      <div className="user-review">

        <div className="user-rev-email">
          <i class="fas fa-circle" id='red-circ'>
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

      </div>
    )
  }
}

export default ReviewIndexItem