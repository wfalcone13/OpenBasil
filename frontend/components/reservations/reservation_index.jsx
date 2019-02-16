import React from 'react'
import ReservationIndexItem from './reservation_index_item'

class ReservationIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchReservations();
  }


  // todayDate(){
  //   let today = new Date();
  //   return today
  // }

  timeFormat(){
    let hour = this.props.reservations.reservation_time[0]
    if(hour > 12){
      return (hour + 12) + this.props.reservations.reservation_time[1]
    } else {
      return this.props.reservations.reservation_time
    }
  }

  upcomingtResv(resDate){
    let today = new Date()
    // let mnth = (today.getMonth())+1;
    // let yar = today.getFullYear();
    // let rsvpMonth = resDate.split("-")[1];
    // console.log(resDate.split("-")[1])
    // let rsvpYear = resDate.split("-")[1];
    // console.log(resDate.split("-")[1])
    // rsvpYear < yar && rsvpMonth <=mnth

    let rsvpDate = new Date(resDate);
    console.log(rsvpDate);
    rsvpDate >= today;
    console.log(rsvpDate >= today)
  }


 
  render(){
   return(
     <div className='whole-page'>
      <div className='top-bar'>
        <h1>{this.props.user_name}</h1>
        <p>100 points</p>
      </div>
      <div className='bottom-side'>
        <div className='bottom-left'>

        </div>
          <div className='bottom-middle'>
              <div className='middle-top'>
                
              </div>
              <div className='all-rsvps'>
                <h2>Upcoming Reservations</h2>
                  {/* {this.todayDate()} */}
                <ul>
                  <li className='full-rs-list'>   
                    {this.props.rsvps.map(reservation => {
                      return <ReservationIndexItem reservation={reservation} 
                      key={reservation.id}
                      restaurant={this.props.restaurants[reservation.restaurant_id] || {}}
                        deleteReservation={this.props.deleteReservation}
                      />
                      
                    })}
                  </li>
                </ul>
            </div>
            <div className='middle-bottom'>

            </div>
        </div>
        <div className='bottom-right'>

        </div>
     </div>
    </div>
   )
  }


}

export default ReservationIndex;