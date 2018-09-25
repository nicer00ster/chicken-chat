import React from 'react';
import PropTypes from 'prop-types';
import EnhancedForm from './EnhancedForm';

function Register(props) {
  return (
    <EnhancedForm
      handleInput={props.handleInput}
      location={props.location}
      onSubmit={props.register}
      subtitle='Chickenry Chat App'
      message='Got an account?'
      link='Login'
      url='/login'
      user={props.user}
    />
  );
}

Register.propTypes = {
  handleInput: PropTypes.func,
  location: PropTypes.object,
  register: PropTypes.func,
  user: PropTypes.object,
};

export default Register;
