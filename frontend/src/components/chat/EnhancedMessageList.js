import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EnhancedMessage from './EnhancedMessage';

const EnhancedMessageList = ({ messages }) => (
  <section id="messages-list">
    <ul>
    {Object.values(messages).map(message => (
      <EnhancedMessage
      key={message.id}
      {...message}
      />
    ))}
    </ul>
  </section>
);

EnhancedMessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default connect(state => ({
  messages: state.chat.messages,
}), {})(EnhancedMessageList);
