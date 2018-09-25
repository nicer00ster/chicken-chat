import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { addUser } from '../../actions';

import EnhancedChatDialog from './EnhancedChatDialog';
import EnhancedInput from './EnhancedInput';
import EnhancedMessageList from './EnhancedMessageList';
import EnhancedSidebar from './EnhancedSidebar';

class Chat extends React.Component {
  render() {
    return (
      <div className="chat">
        <div className="chat__header">
          <div className="chat__header-useravatar"></div>
          <button onClick={this.props.logout}>logout</button>
        </div>
        {/* <div className="chat__main">
          {this.props.chat.focusedUser
            ? <EnhancedChatDialog
                uid={this.props.user.uid}
                chat={this.props.chat}
                fetchMessages={this.props.fetchMessages}
                users={this.props.user.users}
                user={this.props.chat.focusedUser} />
            : <div className="chat__main-dialog">
              </div> }
          <ul className="chat__main-users">
            {Object.values(this.props.user.users).map((user, key) => (
                <li
                  className={classNames(this.props.chat.focusedUser === user.email ? 'focused' : null)}
                  onClick={e => this.props.focusedUser(e.target.textContent)}
                  key={key}>
                  {user.email}
                </li>
            ))}
          </ul>
        </div> */}
        <EnhancedSidebar />
        <EnhancedMessageList />
        <EnhancedInput />
        {/* <div className="chat__message">
          <input onChange={e => this.props.handleInput(e.target.value, 'message')} type='text' placeholder="Type your message here..."/>
          <input onClick={() => this.props.sendMessage(this.props.chat.message, this.props.chat.focusedUser, this.props.user)} type='submit' value='Send'/>
        </div> */}
      </div>
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

export default connect(null, mapDispatchToProps)(Chat);
