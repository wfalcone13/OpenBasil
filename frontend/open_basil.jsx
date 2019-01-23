import React from 'react';
import ReactDOM from 'react-dom';
import {login, signup, logout} from './actions/session_actions';
import configureStore from '../frontend/store/store'
import Root from './components/root';

document.addEventListener("DOMContentLoaded", ()=>{
////tests
  window.login = login;
  window.logout = logout;
  window.signup = signup;
/// tests 

  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root)
});
