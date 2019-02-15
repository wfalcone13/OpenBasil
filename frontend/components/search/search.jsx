import React from 'react';
// import RestaurantIndex from '../restaurants/restaurant_index';
import {withRouter} from 'react-router-dom';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return (e) => this.setState({ [field]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    e.stopPropagation();
    this.props.search(this.state.query.toLowerCase()).then(() => {
      this.props.history.push("/search")
    })
  }

render(){
  return(
    <div>
    <div className="search-container">
      <h1>Find your table for any occasion</h1>
      <div className="search-bar-main">

        <form action="" className="search-date">
          <input type="date" name="date"  defaultValue="2019-02-22"/>
          
        </form>

        <form action="" className="search-time"> 
          <input type="time" name="time" defaultValue="10:00"/>
        </form> 

        <form action="" className="search-bar-number">
          <input type="number" name="number" min='1' max='15' defaultValue="2"/>
        </form>  

        <form action="" className="search-bar" onSubmit={this.handleSubmit}>
          <input type="text" name="search" placeholder="  New York City...." value={this.state.query} onChange={this.update('query')}/>
          <button className="search-button">Let's go</button>
        </form>
      </div>
    </div>
    </div>
  )
  }
}

export default withRouter(Search);