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
            <input type="date" name="date" defaultValue="2019-02-22" className="search-date"/>
            <input type="time" name="time" defaultValue="10:00" className="search-time" />
            <input type="number" name="number" min='1' max='15' placeholder="2 People" className="search-bar-number" />
            {/* <div className="search_categories">
              <div className='select'>
                <select name="search_categories" id="search_categories">
                  <option value="1" defaultValue="selected">2 People </option>
                  <option value="2"> 3 People </option>
                  <option value="2"> 4 People</option>
                  <option value="2"> 5 People</option>
                  <option value="2"> 6 People</option>
                  <option value="2"> 7 People</option>
                  <option value="2"> 8 People</option>
                  <option value="2"> 9 People</option>
                  <option value="2"> 10 People</option>
                  <option value="2"> 11 People</option>
                </select>
              </div>
            </div> */}
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