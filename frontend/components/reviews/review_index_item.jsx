import React from 'react';


class ReviewIndexItem extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    return(
      <div>
        <div>
          {this.props.user_email}
        </div>
        <div>
          <p>{this.props.review.title}</p>
          <div>
            {this.props.review.body}
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewIndexItem