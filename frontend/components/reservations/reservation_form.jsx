import React from 'react';
import {Redirect, withRouter} from 'react-router-dom'

let today = new Date();
const dd = today.getDate();
const mm = today.getMonth() + 2;
const yyyy = today.getFullYear();


class ReservationForm extends React.Component {
  constructor(props){
    super(props);
    this.props.reservation.reservation_date = `${yyyy}-${mm}-${dd}`;
    this.props.reservation.reservation_time = "10:00";
    this.props.reservation.seating_number = 4;
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

  returnToday(){
    
    let t = new Date();
    const d = t.getDate();
    const m = t.getMonth() + 2;
    const y = t.getFullYear();
    let v = `${m}-${d}-${y}`
    // return v 
    return "2019-03-28"
  }

  renderErrors() {
    return (
      <ul className="session-errors-ul">
        {this.props.errors.map((error, i) => {
          return <li key={`error-${i}`} className="session-error">
            {error}
          </li>
        })}
      </ul>
    )
  }


  render(){
    
    return(
      <div className='res-form-box'>
        <div className='res-border'>
          <div className='res-form-info'> 
            <h3>Make a Reservation</h3>
            {this.renderErrors()}
            <form onSubmit={this.handleSubmit} className='res-form'>
              <div className='seating-inputs'>
                <p>Party Size</p>
                <input onChange={this.updateResSeat.bind(this)} type="number"  placeholder="For 4"/>
              </div>
              <div className='d-t-section'>
                <div className='date-section'>
                  <p>Date</p>  
                  <input onChange={this.updateResDate.bind(this)} type="date" defaultValue={`${this.returnToday()}`}/>
                </div>
                <div className='time-section'>
                  <p>Time</p>
                  <input onChange={this.updateResTime.bind(this)} type="time" defaultValue="10:00"/>
                </div>
              </div>
              <input type="submit" name="" value="Book Table" className='submit-rsvp'/>
            </form>
          </div>
        </div>
      </div>

    )
  }
}

export default ReservationForm;