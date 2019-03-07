import React from 'react'
import Rating from 'react-rating'
// var Rating = require('react-rating');

class ReviewForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateStar = this.updateStar.bind(this);
  }


  updateTitle(e){
    
    this.setState({title: e.target.value})
  }

  updateBody(e) {
    this.setState({ body: e.target.value })
  }

  updateStar(e) {
    
    this.setState({ stars: e })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.createReview(this.state).then( () => {
      this.setState({ title: "", body: '', stars: "" })
    }).then(this.props.closeModal).then(() => {
      this.props.history.push(`resvp`)
    })
  }



  render(){
    
    return(
      <div className="review-box">
          <form onSubmit={this.handleSubmit} className="rev-form">
            <h3>Leave Review</h3>
            <input onChange={this.updateTitle.bind(this)} type="text" placeholder='title' />
            <input onChange={this.updateBody.bind(this)} type="text" placeholder="Body" className="review-body"/>
            {/* <input onChange={this.updateStar.bind(this)} type="number" placeholder="Stars"  max='5' min='1'/> */}
            <Rating 
            start={0}
            stop={5}
            step={1}
            initialRating={this.state.stars}
            emptySymbol={<i className="fas fa-star" id="grey-stars" ></i >}
            fullSymbol={<i className="fas fa-star" id="res-stars" ></i >}
            onChange={this.updateStar}
            />


            <input type="submit" value="Leave Review" className='review-sub'/>
            
          </form>
      </div>
    )
  }


}

export default ReviewForm