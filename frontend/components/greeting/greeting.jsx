import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout, openModal}) => {
  const sessionLinks = () =>{
    return(

      
      
      <nav className='login-signup'>
        <button onClick={() => openModal('login')}>Sign in</button>
        <button onClick={() => openModal('signup')}>Sign up</button>
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

  return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();

}

export default Greeting;