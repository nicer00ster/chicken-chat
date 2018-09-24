import React from 'react';
import PropTypes from 'prop-types';
import EnhancedForm from './EnhancedForm';

function Register(props) {
  return (
    <EnhancedForm
      handleInput={props.handleInput}
      location={props.location}
      message='Got an account?'
      link='Login'
      url='/login'
    />
  );
}

Register.propTypes = {
  handleInput: PropTypes.func,
  location: PropTypes.object,
};

export default Register;
