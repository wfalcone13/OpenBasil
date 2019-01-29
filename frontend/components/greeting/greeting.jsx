import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout, openModal}) => {
  const sessionLinks = () =>{
    return(
      
      <nav className='login-signup'>
        <button onClick={() => openModal('signup')} className='signup-button'>Sign up</button>
        <button onClick={() => openModal('login')} className='login-button'>Sign in</button>
        <i className="fas fa-search"></i>
      </nav>
    )
  }

  const personalGreeting = () => {
    return(
      <div className="header-right">
        <p className="name-display">Hi, {currentUser.first_name}</p>
        <div className="nav-dropdown">
          <button className="drop-b">⌄</button>
            <div className="drop-content">
            <button className="header-button" onClick={logout}>Sign Out</button>
          </div>
        </div>
      </div>
    )
    
  }
 
  return (currentUser ? personalGreeting(currentUser,logout) : sessionLinks());

}

export default Greeting;