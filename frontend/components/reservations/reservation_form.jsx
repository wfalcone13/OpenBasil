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
    this.props.createReservation(this.state).then(result => {
      this.props.history.push(`/resvp/`)});
  }

  render(){
    
    return(
      <div className='res-form-box'>
        <div className='rest-review-box'>
          <div className="rest-review-text">
            <p>This is a description about the Restaurant. If
              I had more time I would make this randomly generate for each
              restaurant. But do people read these?
            </p>
          </div>
        </div>
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
                  <input onChange={this.updateResDate.bind(this)} type="date"  placeholder="Wed"/>
                </div>
                <div className='time-section'>
                  <p>Time</p>
                  <input onChange={this.updateResTime.bind(this)} type="time"  placeholder="7:00 PM"/>
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