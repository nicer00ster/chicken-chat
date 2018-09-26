import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const EnhancedSidebar = props => (
  <ul className="chat__main-users">
    {props.users.map(user => (
      <li
        key={user.id}
        onClick={e => props.focusedUser(e.target.textContent)}
        className={classNames(props.chat.focusedUser === user.name ? 'focused' : null)}>
        {user.name}
      </li>
    ))}
  </ul>
);

EnhancedSidebar.propTypes = {
  focusedUser: PropTypes.func,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  chat: PropTypes.shape({
    focusedUser: PropTypes.string,
  }),
};

export default connect(state => ({
  users: state.user.users,
}), {})(EnhancedSidebar);
