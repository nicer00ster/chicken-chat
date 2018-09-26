import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import EnhancedAppBar from './EnhancedAppBar';
import EnhancedInput from './EnhancedInput';
import EnhancedMessageList from './EnhancedMessageList';
import EnhancedWrapper from './EnhancedWrapper';
import { addUser } from '../../actions';
import styles from './styles';

class Chat extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <EnhancedAppBar
          chat={this.props.chat}
          focusedUser={this.props.focusedUser} />
          <main className={classes.root}>
            <EnhancedWrapper>
              <EnhancedMessageList />
              <EnhancedInput />
            </EnhancedWrapper>
          </main>
      </React.Fragment>
    );
  }
}

Chat.propTypes = {
  logout: PropTypes.func,
  user: PropTypes.object,
  handleInput: PropTypes.func,
  sendMessage: PropTypes.func,
  focusedUser: PropTypes.func,
  fetchMessages: PropTypes.func,
  connectSocket: PropTypes.func,
  disconnectSocket: PropTypes.func,
  chat: PropTypes.shape({
    message: PropTypes.string,
    focusedUser: PropTypes.string,
  }),
};

const mapDispatchToProps = dispatch => ({
  dispatch: name => {
    dispatch(addUser(name));
  },
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(Chat));
