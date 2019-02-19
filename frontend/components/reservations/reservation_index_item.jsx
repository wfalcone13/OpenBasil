import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom'


let month = ['0','January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let days = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday','Friday','Saturday']
let MONTH = ['0', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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

  cancelOrReview() {
    debugger
    let td = new Date()
    
    if (td < new Date(this.props.reservation.reservation_date)){
      return (<button onClick={this.handleDelete}>Cancel</button>)
    } else {
      return (<button onClick={this.handleDelete}>Leave Review</button>)
    }
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteReservation(this.props.reservation.id).then(result =>{
      this.props.history.push(`resvp/`)});
  }

  timeFormat() {
    let hour = this.props.reservation.reservation_time.slice(11,13)

    if (parseInt(hour) > 12) {
      return ( parseInt(hour) % 12) + ":" +this.props.reservation.reservation_time.slice(14,16) + " PM"
    } else {
      return this.props.reservation.reservation_time.slice(11,16)
    }
  }

 

  render(){
    debugger
    return(
      <div className='namebox'>
          <div className='name-photo'>
            <img src={this.props.restaurant.photoURL} alt=""/> 
          </div>
            <div className='rsvp-info-box'>
              <p>{this.props.restaurant.name}</p>
              <p>{this.dateFormat(this.props.reservation.reservation_date)} {this.timeFormat()}</p>
              <p>Table for {this.props.reservation.seating_number} people</p>
            <div className='rsvp-buttons-change'>
            <Link to={`/restaurants/${this.props.restaurant.id}`}>View</Link>
              {/* <a href="`">Modify</a> */}
              {/* <button onClick={this.handleDelete}>Cancel</button> */}
            <p>{this.cancelOrReview()}</p>
              
            </div>
          </div>
      </div>
    )
  }
  
  
}

export default ReservationIndexItem
{/* <p> {this.props.restaurant[this.props.reservation.restaurant_id]}  </p> */}