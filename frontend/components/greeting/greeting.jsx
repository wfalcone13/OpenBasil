import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout, openModal}) => {
  const sessionLinks = () =>{
    return(
      
      <nav className='login-signup'>
        <button onClick={() => openModal('signup')} className='signup-button'>Sign up</button>
        <button onClick={() => openModal('login')} className='login-button'>Sign in</button>
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
 
  return (currentUser ? personalGreeting(currentUser,logout) : sessionLinks());

}

export default Greeting;