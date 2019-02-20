import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, HashRouter, Switch, Link} from 'react-router-dom'; 
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import PopularIndexContainer from './popular_restaurants/popular_index_container' 
import Modal from './modal/modal'
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SearchContainer from './search/search_container'
import { logoutCurrentUser } from '../actions/session_actions';
import RestaurantShowContainer from './restaurants/restaurant_show_containter'
import topNear from '../components/additional/top_near'
import featureInt from '../components/additional/featured_internation'
import ReservationIndex from '../components/reservations/reservation_index_container'
import ReviewCreateContainer from '../components/reviews/review_create_contianer'
import ReviewIndexContainer from '../components/reviews/review_index_container'
import search from './search/search';
import SearchResults from '../components/search/search_show_container'

const App = () => {
  return (

    <div>
      <Modal />
      <header className="site-header">
        <Link to="/" className="header-link">
        <div className="left-bar">
            <img src="https://previews.123rf.com/images/lenm/lenm1410/lenm141000190/32749260-mascot-illustration-featuring-a-potted-basil-plant-giving-a-thumbs-up.jpg" alt=""/>
          <p>OpenBasil</p>
        </div>
        </Link>
        <GreetingContainer/>
      </header>

      < Route path='/restaurants/:restaurantId' component={RestaurantShowContainer}/>
      {/* < Route path='/restaurants/:restaurantId' component={ReviewCreateContainer} /> */}
      < Route path='/restaurants/:restaurantId' component={ReviewIndexContainer} />


      < Route path='/resvp' component={ReservationIndex} />

      < Route exact path ='/' component={SearchContainer}/>
      < Route path='/search' component={SearchResults}/>
      < Route exact path='/' component={PopularIndexContainer}/>
      {/* < Route exact path='/' component={topNear} />
      < Route exact path='/' component={featureInt} /> */}
   
      <footer>
        <div className="foot-box">
          <div>
            <p>Discover Will</p>
            <a href="https://www.linkedin.com/in/wfalcone/" target="_blank">LinkedIn</a>
            <a href="https://github.com/wfalcone13" target="_blank">GitHub</a>
            <a href="https://wfalcone13.github.io/" target="_blank">Professional Site</a>
          </div>
          <div>
            <p>OPENBASIL</p>
            <a href="https://github.com/wfalcone13/OpenBasil" target="_blank">About</a>
          </div>
          <div>
            <p>More</p>
            <a href="https://wfalcone13.github.io/JerryShakedown/" target="_blank">Check out my game!</a>
          </div>
        </div>
      </footer>
    </div>

    
  )
}

export default App;