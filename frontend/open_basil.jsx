import React from 'react';
import ReactDOM from 'react-dom';
import {login, signup, logout} from './actions/session_actions';
import configureStore from '../frontend/store/store'
import Root from './components/root';

document.addEventListener("DOMContentLoaded", ()=>{


let store;
if (window.currentUser) {
  const preloadedState ={
    entities: {
      users: { [window.currentUser.id]: window.currentUser}
    }, 
    session: {id: window.currentUser.id}
  };
  store = configureStore(preloadedState);
  delete window.currentUser;
} else {
  store = configureStore();
}

const root = document.getElementById('root');
ReactDOM.render(<Root store={store} />, root)
});






////tests
//   window.login = login;
//   window.logout = logout;
//   window.signup = signup;
// /// tests 

// const store = configureStore();
// window.getState = store.getState;
// window.dispatch = store.dispatch;