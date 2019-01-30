import { connect } from "react-redux";
import React from 'react';
import {login} from '../../actions/session_actions';
import {openModal, closeModal} from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProp = ({errors}) => {
  return {
    errors: errors.session,
    formType: 'login',
  }
}

const mapStateToDispatch = (dispatch) =>{
  return {
    login: (user) => dispatch(login(user)),
    demoLog: ()=> dispatch(login({email:'demo@gmail.com', password: '123456'})),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProp, mapStateToDispatch)(SessionForm); 