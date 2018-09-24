import React from 'react';
import PropTypes from 'prop-types';
import EnhancedForm from './EnhancedForm';

function Login(props) {
  return (
    <EnhancedForm
      handleInput={props.handleInput}
      location={props.location}
      message='Need to'
      link='register?'
      url='/register'
    />
  );
}

Login.propTypes = {
  handleInput: PropTypes.func,
  location: PropTypes.object,
};

export default Login;
