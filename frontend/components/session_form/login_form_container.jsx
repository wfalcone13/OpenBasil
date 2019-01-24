import { connect } from "react-redux";
import React from 'react';
import {Link} from 'react-router-dom';
import {login} from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProp = ({errors}) => {
  return {
    errors: errors.session,
    formType: 'sign in',
    navLink: <Link to="/signup">Sign Up Instead</Link>
  }
}

const mapStateToDispatch = (dispatch) =>{
  return {
    login: (user) => dispatch(login(user)),
  }
}

export default connect(mapStateToProp, mapStateToDispatch)(SessionForm); 