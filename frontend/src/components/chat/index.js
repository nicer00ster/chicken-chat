import React from 'react';
import PropTypes from 'prop-types';

class Chat extends React.Component {
  render() {
    return (
      <div className="chat">
        <div className="chat__header">
          <div className="chat__header-useravatar"></div>
          <button onClick={this.props.logout}>logout</button>
        </div>
        <div className="chat__main">
          <div className="chat__main-dialog">
            <div className="chat__main-dialog__them">
              <div className="chat__main-dialog__them-avatar"></div>
              <div className="chat__main-dialog__them-message">hey</div>
            </div>
            <div className="chat__main-dialog__self">
              <div className="chat__main-dialog__self-avatar"></div>
              <div className="chat__main-dialog__self-message">hiiiii</div>
            </div>
          </div>
          <ul className="chat__main-users">
            {Object.values(this.props.user.users).map((user, key) => (
                <li key={key}>
                  {user.email}
                </li>
            ))}
          </ul>
        </div>
        <div className="chat__message">
          <input onChange={e => this.props.handleInput(e.target.value, 'message')} type='text' placeholder="Type your message here..."/>
          <input onClick={() => this.props.sendMessage(this.props.chat.message)} type='submit' value='Send'/>
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
  logout: PropTypes.func,
  user: PropTypes.object,
  handleInput: PropTypes.func,
};

export default Chat;
