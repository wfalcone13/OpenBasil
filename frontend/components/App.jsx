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

 
      < Route exact path ='/' component={SearchContainer}/>
   
      {/* <h2 className="pop-h2">Popular restaurants in</h2> */}
      < Route exact path='/' component={PopularIndexContainer}/>
    
     


      <h2 className="bottom">Bottom of Page</h2>
   
    </div>

    
  )
}

export default App;