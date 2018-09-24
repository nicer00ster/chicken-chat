import React from 'react';

class Chat extends React.Component {
  render() {
    return (
      <div className="chat">
        <div className="chat__header">

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
          <div className="chat__main-users">

          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
