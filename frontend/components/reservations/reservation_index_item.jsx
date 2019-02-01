import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom'


let month = ['0','January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let days = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday','Friday','Saturday']

class ReservationIndexItem extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.reservation
    this.handleDelete = this.handleDelete.bind(this)
  }

  dateFormat(date){
    const date_arr = date.split('-');
    const mth = month[parseInt(date_arr[1])];
    const day = days[Math.floor(Math.random() * days.length)];
    return day  + ",  " + mth + " " + date_arr[2] + ",   "+ date_arr[0] +", ";
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteReservation(this.props.reservation.id).then(result =>{
      this.props.history.push(`resvp/`)});
  }

 

  render(){
    return(
      <div className='namebox'>
          <div className='name-photo'>
            <img src={this.props.restaurant.photoURL} alt=""/> 
          </div>
            <div className='rsvp-info-box'>
              <p>{this.props.restaurant.name}</p>
              <p>{this.dateFormat(this.props.reservation.reservation_date)} {this.props.reservation.reservation_time.slice(11, 16)}</p>
              <p>Table for {this.props.reservation.seating_number} people</p>
            <div className='rsvp-buttons-change'>
              <a href="">View</a>
              <a href="">Modify</a>
              <button onClick={this.handleDelete}>Cancel</button>

              
            </div>
          </div>
      </div>
    )
  }
  
  
}

export default ReservationIndexItem
{/* <p> {this.props.restaurant[this.props.reservation.restaurant_id]}  </p> */}