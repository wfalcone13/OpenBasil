import React from 'react'
import ReservationIndexItem from './reservation_index_item'
import ReviewCreateContainer from '../reviews/review_create_contianer'


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

  upcomingtResv(){
    let td = new Date()
    // find the res. times that are after today and rthen pass to maps
    
    let upcomingArr = []
    if (this.props.rsvps.length >= 1 ){
      
      this.props.rsvps.forEach(res => {
        if( td <= new Date(res.reservation_date)){
          upcomingArr.push(res)
        }
      })
    }
    if (upcomingArr.length >= 1){
      
    return ( <li className='full-rs-list'>
       {upcomingArr.map(reservation => {
         return <ReservationIndexItem reservation={reservation}
           key={reservation.id}
           restaurant={this.props.restaurants[reservation.restaurant_id] || {}}
           deleteReservation={this.props.deleteReservation}
           openModal={this.props.openModal}
           fetchReservation={this.props.fetchReservation}
         />

       })}
     </li>
    )
      
      } else {
        return (
      <li className='full-rs-list'>
         <h1 id='no-rsvps'>No Upcoming Reservations</h1>
      </li>
        )}
    
  }

  pastReservations(){
    let td = new Date()
    // find the res. times that are after today and rthen pass to maps

    let pastArr = []
    if (this.props.rsvps.length >= 1) {
      
      this.props.rsvps.forEach(res => {
        if (td > new Date(res.reservation_date)) {
          pastArr.push(res)
        }
      })
    }
    
    if (pastArr.length >= 1) {
      return (<li className='full-rs-list'>
        {pastArr.map(reservation => {
          return <ReservationIndexItem reservation={reservation}
            key={reservation.id}
            restaurant={this.props.restaurants[reservation.restaurant_id] || {}}
            deleteReservation={this.props.deleteReservation}
            openModal={this.props.openModal}
            fetchReservation={this.props.fetchReservation}
          />

        })}
      </li>
      )
    } else {
      return (
        <li className='full-rs-list'>
          <h1 id='no-rsvps'>No Past Reservations</h1>
        </li>
      )
    }
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
                

                  {this.upcomingtResv()}
                  
                </ul>
            </div>
            <div className='middle-bottom'></div>
          
             <div className='all-rsvps'>
                  <h2>Past Reservations</h2>
                <ul>
                  {this.pastReservations()}
                </ul>
             </div>  
           <div className='middle-bottom'></div>
        </div>
        <div className='bottom-right'>

        </div>
     </div>
       {/* <button onClick={() => this.props.openModal("review")} className='signup-button'>review</button> */}
       {/* <ReviewCreateContainer/> */}
    </div>
   )
  }


}

export default ReservationIndex;