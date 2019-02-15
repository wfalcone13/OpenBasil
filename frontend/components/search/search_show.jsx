import React from 'react';
import SearchResultItem from './search_show_item'



class SearchResults extends React.Component{
  constructor(props){
    super(props);
  }
  

  

  render(){
    
    return(
    <div className="hello">
      
      <ul>
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








