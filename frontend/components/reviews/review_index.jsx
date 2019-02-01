import React from 'react'
import ReviewIndexItem from './review_index_item'

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
                user_email={this.props.user_email}
              
              />
            })}
          </li>
        </ul>
      </div>
    )
  }
}

export default ReviewIndex;