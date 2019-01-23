import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  const sessionLinks = () =>{
    return(
      <nav className='login-signup'>
        <Link to="/signup">Sign Up</Link>
          &nbsp;or&nbsp;
        <Link to="/login">Sign In</Link>
      </nav>
    )
  }

  const personalGreeting = () => {
    return(
      <hgroup className="header-group">
        <h2>Welcome {currentUser.first_name}!</h2>
        <button className="header-button" onClick={logout}>Sign Out</button>
      </hgroup>
    )
  }

  return currentUser ? personalGreeting() : sessionLinks();

}

export default Greeting;