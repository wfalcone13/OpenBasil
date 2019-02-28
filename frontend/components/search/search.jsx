import React from 'react';
// import RestaurantIndex from '../restaurants/restaurant_index';
import {withRouter} from 'react-router-dom';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seating_number: '', reservation_time: '', reservation_date: '', query: ''};
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

  numberShow(){
    return '2 people';
  }

render(){
  
  return(
    <div>
    <div className="search-container">
      <h1>Find your table for any occasion</h1>
      <div className="search-bar-main">
          <form action="" className="search-bar" onSubmit={this.handleSubmit} >
            <input type="date" name="date" defaultValue="2019-02-22" className="search-date"  onChange={this.update('reservation_date')}/>
            <input type="time" name="time" defaultValue="10:00" className="search-time" onChange={this.update('reservation_time')} />
            <input type="number" name="number" min='1' max='15' placeholder="2 People" className="search-bar-number" onChange={this.update('seating_number')}/>
          <input type="text" name="search" placeholder="  New York City...." value={this.state.query} onChange={this.update('query')} className="search-search"/>
          <button className="search-button">Let's go</button>
        </form>
      </div>
    </div>
    


    </div>
  )
  }
}

export default withRouter(Search);