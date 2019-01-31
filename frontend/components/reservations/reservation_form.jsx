import React from 'react';

class ReservationForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.reservation;
    this.updateResDate.bind(this);
    this.updateResSeat.bind(this);
    this.updateResTime.bind(this);
  }

  updateResTime(e){
    this.setState({reservation_time: e.target.value})
  }

  updateResDate(e){
    this.setState({reservation_date: e.target.value})
  }

  updateResSeat(e){
    this.setState({reservation_seating: e.target.value})
  }

  render(){
    
    return(
      <div className='res-form-box'>
        <div className='res-border'>
          <div className='res-form-info'> 
            <h3>Make a Reservation</h3>
            <form onSubmit={()=> this.props.action(this.state) } className='res-form'>
              <div className='seating-inputs'>
                <p>Party Size</p>
                <input onChange={this.updateResSeat} type="number" value={this.state.reservation_seating} placeholder="For 4"/>
              </div>
              <div className='d-t-section'>
                <div className='date-section'>
                  <p>Date</p>  
                  <input onChange={this.updateResDate} type="date" value={this.state.reservation_date} placeholder="Wed"/>
                </div>
                <div className='time-section'>
                  <p>Time</p>
                  <input onChange={this.updateResTime} type="time" value={this.state.reservation_time} placeholder="7:00 PM"/>
                </div>
              </div>
              <input type="hidden" value={this.props.currentUser}/>
              <input type="hidden" value={this.props.restaurantId}/>
              <input type="submit" name="" value="Find Table" className='submit-rsvp'/>
            </form>
          </div>
        </div>
      </div>

    )
  }
}

export default ReservationForm;