import React from 'react';
import PropTypes from 'prop-types';

class EnhancedChatDialog extends React.Component {
  // componentDidMount() {
  //   this.props.fetchMessages(this.props.user);
  // }
  // componentWillUpdate(prevProps) {
  //   if (this.props.user !== prevProps.user) {
  //     this.props.fetchMessages(this.props.user);
  //   }
  // }
  render() {
    const filtered = Object.values(this.props.users).filter(user => user.email === this.props.user);
    // console.log(filtered[0].uid);
    return (
      <div className="chat__main-dialog">
        {this.props.user ? `Chat with ${this.props.user}` : null}
        <div className="chat__main-dialog__them">
          <div className="chat__main-dialog__them-avatar"></div>
          <div className="chat__main-dialog__them-message">{user.message}</div>
        </div>
        {/* <div className="chat__main-dialog__self">
          <div className="chat__main-dialog__self-avatar"></div>
          <div className="chat__main-dialog__self-message">hiiiii</div>
        </div> */}
      </div>
    );
  }
}

EnhancedChatDialog.propTypes = {
  user: PropTypes.string,
  fetchMessages: PropTypes.func,
};

export default EnhancedChatDialog;
