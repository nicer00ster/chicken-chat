import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function EnhancedForm(props) {
  return (
    <form
      onSubmit={props.onSubmit}
      className="form">
      <div className="form__title">
        CHICKEN CHAT!
      </div>
      <h4>{props.subTitle}</h4>
      { props.location.pathname === '/register'
        ? <div className="form__username">
            <input onChange={e => props.handleInput(e.target.value, 'username')} required placeholder="Username" type="text" />
          </div>
        : null }
      <div className="form__email">
        <input onChange={e => props.handleInput(e.target.value, 'email')} required placeholder="Email" type="email" />
      </div>
      <div className="form__password">
        <input onChange={e => props.handleInput(e.target.value, 'password')} required placeholder="Password" type="password" />
      </div>
      <input className="form__submit" type="submit" value={props.button} />
      <div>
        <span className="form__register">{props.message}<Link to={props.url}>{props.link}</Link></span>
      </div>
    </form>
  );
}

EnhancedForm.propTypes = {
  onSubmit: PropTypes.func,
  handleInput: PropTypes.func,
  message: PropTypes.string,
  url: PropTypes.string,
  link: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

export default EnhancedForm;
