import React from 'react';
import {Redirect, withRouter} from 'react-router-dom'

class ReservationForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.reservation;
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  updateResTime(e){
    this.setState({reservation_time: e.target.value})
  }

  updateResDate(e){
    this.setState({reservation_date: e.target.value})
  }

  updateResSeat(e){
    this.setState({seating_number: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    if(this.props.reservation.user_id === null){
      
      this.props.openModal('login')
    }else{

    this.props.createReservation(this.state).then(result => {
      this.props.history.push(`/resvp/`)});
    }
  }

  render(){
    
    return(
      <div className='res-form-box'>
        <div className='res-border'>
          <div className='res-form-info'> 
            <h3>Make a Reservation</h3>
            <form onSubmit={this.handleSubmit} className='res-form'>
              <div className='seating-inputs'>
                <p>Party Size</p>
                <input onChange={this.updateResSeat.bind(this)} type="number"  placeholder="For 4"/>
              </div>
              <div className='d-t-section'>
                <div className='date-section'>
                  <p>Date</p>  
                  <input onChange={this.updateResDate.bind(this)} type="date" defaultValue="2019-02-22"/>
                </div>
                <div className='time-section'>
                  <p>Time</p>
                  <input onChange={this.updateResTime.bind(this)} type="time" defaultValue="10:00"/>
                </div>
              </div>
              <input type="submit" name="" value="Find Table" className='submit-rsvp'/>
            </form>
          </div>
        </div>
      </div>

    )
  }
}

export default ReservationForm;