import React from 'react';
import SearchResultItem from './search_show_item'



class SearchResults extends React.Component{
  constructor(props){
    super(props);
  }
  

  

  render(){
    debugger
    return(
    <div className="results">
      <ul>
        <h2>Results Returned {this.props.rests.length} Restaurants</h2>
        <li>
          {this.props.rests.map(rest =>{
            return <SearchResultItem rest={rest}
            key={rest.id}
            />
          })}
        </li>
      </ul>
      
    </div>
    )}

}



export default SearchResults








