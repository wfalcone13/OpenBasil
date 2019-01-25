import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, HashRouter, Switch, Link} from 'react-router-dom'; 
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import Modal from './modal/modal'
import {AuthRoute, ProtectedRoute} from '../util/route_util';



const App = () => {
  return (

    <div>
      <Modal />
      <header className="site-header">
        <Link to="/" className="header-link">
        <div className="right-bar">
          <img src="http://brand.opentable.com/wp-content/uploads/2015/03/OTLogo_rationalizationhor-r1c-01.png" alt=""/>
          <p>OpenBasil</p>
          
        </div>
        </Link>
        <GreetingContainer/>
     
      </header>

      {/* <AuthRoute path="/login" component={LoginFormContainer}/>
      <AuthRoute path="/signup" component={SignupFormContainer} /> */}

      {/* <div className='main-container'>

        <h2>Find your table for any occasion</h2> 
      </div>
 */}


   
    </div>

    
  )
}

export default App;