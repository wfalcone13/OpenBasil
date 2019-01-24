import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  const sessionLinks = () =>{
    return(
      <nav className='login-signup'>
        <Link to="/signup" className="signup-button">Sign up</Link>
          &nbsp;&nbsp;
        <Link to="/login" className="login-button" >Sign in</Link>
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