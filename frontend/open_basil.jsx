import React from 'react';
import ReactDOM from 'react-dom';
import {login, signup, logout} from './actions/session_actions';
import configureStore from '../frontend/store/store'
import Root from './components/root';
import {fetchReservations, fetchReservation, 
  createReservation, updateReservation, 
  deleteReservation}  from './util/reservation_api_util'

document.addEventListener("DOMContentLoaded", ()=>{
  

let store;
if (window.currentUser) {
  const preloadedState ={
   session: {id: window.currentUser.id},
   entities: {
     users: {[window.currentUser.id]:window.currentUser}
   }
  };
  store = configureStore(preloadedState);
  delete window.currentUser;
} else {
  store = configureStore();
}

  window.dispatch = store.dispatch;
  window.getState = store.dispatch;
  window.fetchReservations = fetchReservations;
  window.fetchReservation = fetchReservation;
  window.createReservation = createReservation;
  window.updateReservation = updateReservation;
  window.deleteReservation = deleteReservation;


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