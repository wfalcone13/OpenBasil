import {connect} from 'react-redux';
import React from 'react';
import { signup, login} from '../../actions/session_actions';
import {openModal, closeModal} from '../../actions/modal_actions'
import SessionForm from './session_form';

const mapStateToProps = ({errors}) => {
  return {
    errors: errors.session,
    formType: 'signup',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    demoLog: () => dispatch(login({ email: 'demo@gmail.com', password: '123456' })),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);