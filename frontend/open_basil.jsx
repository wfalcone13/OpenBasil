import React from 'react';
import ReactDOM from 'react-dom';
import {login, signup, logout} from './util/session_api_util';
import configureStore from '../frontend/store/store'

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
  ReactDOM.render(<h1>Welcome to Open Basil!</h1>, root)
});
