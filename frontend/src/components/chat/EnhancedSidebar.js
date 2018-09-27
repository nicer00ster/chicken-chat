import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const EnhancedSidebar = props => (
  <List>
    {props.users.map(user => (
      <ListItem
        onClick={e => props.focusedUser(e.target.textContent)}
        className={classNames(props.chat.focusedUser === user.name ? 'focused' : null)}
        key={user.id}
        dense
        button>
        <Avatar alt={user.name} src={'http://i.pravatar.cc/150?img=3'} />
        <ListItemText primary={user.name} />
      </ListItem>
    ))}
  </List>
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
