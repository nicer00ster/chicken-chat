import React from 'react';
import PropTypes from 'prop-types';

const EnhancedMessage = ({ message, author }) => (
  <p>
    <i>{author}</i>: {message}
  </p>
);

EnhancedMessage.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default EnhancedMessage;
