import React from 'react'

class ReviewForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  updateTitle(e){
    this.setState({title: e.target.value})
  }

  updateBody(e) {
    this.setState({ body: e.target.value })
  }

  updateStar(e) {
    this.setState({ stars: e.target.value })
  }

  handleSubmit(e){
    e.preventDefault()
    
    this.props.createReview(this.state).then( () => {
      this.setState({ title: "", body: '', stars: "" })
    }).then(this.props.closeModal);
  }



  render(){
    
    return(
      <div className="review-box">
        <h3>Leave Review</h3>
          <form onSubmit={this.handleSubmit} className="rev-form">
            <input onChange={this.updateTitle.bind(this)} type="text" placeholder='title' />
            <input onChange={this.updateBody.bind(this)} type="text" placeholder="Body" className="review-body"/>
            <input onChange={this.updateStar.bind(this)} type="number" placeholder="Stars"  max='5' min='1'/>
            <input type="submit" value="Leave Review" className='review-sub'/>
          </form>
      </div>
    )
  }


}

export default ReviewForm