import React from 'react';
import PropTypes from 'prop-types';

const EnhancedMessage = ({ message, sender }) => {
  return (
    sender !== 'Me'
      ? <div className="chat__main-dialog__them">
          <div className="chat__main-dialog__them-avatar"></div>
          <div className="chat__main-dialog__them-name">{sender}</div>
          <div className="chat__main-dialog__them-message">{message}</div>
        </div>
      : <div className="chat__main-dialog__self">
          <div className="chat__main-dialog__self-avatar"></div>
          <div className="chat__main-dialog__self-name">{sender}</div>
          <div className="chat__main-dialog__self-message">{message}</div>
        </div>
  );
};

EnhancedMessage.propTypes = {
  message: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
};

export default EnhancedMessage;
