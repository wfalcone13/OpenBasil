import React from 'react'
import ReviewIndexItem from './review_index_item'

const MONTH = [0, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


class ReviewIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchReviews
  }


  

  render(){
    
    return(
      <div className="all-reviews">
        <ul className="all-reviews-lis">
          <li>
            {this.props.reviews.map(review => {
              return <ReviewIndexItem review={review}
              key={review.id}
                // user_email={this.props.user_email}
              deleteReview={this.props.deleteReview}
              />
            })}
          </li>
        </ul>
      </div>
    )
  }
}

export default ReviewIndex;