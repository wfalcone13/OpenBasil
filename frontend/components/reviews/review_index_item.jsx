import React from 'react';


class ReviewIndexItem extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    return(
      <div className="user-review">
        <div className="user-rev-email">
          {this.props.user_email}
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