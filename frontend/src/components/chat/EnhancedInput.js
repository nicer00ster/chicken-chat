import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMessage } from '../../actions';

function EnhancedInput(props) {
  let input;
  return (
    <section id="new-message">
      <input
        onKeyPress={e => {
          if (e.key === 'Enter') {
            props.dispatch(input.value, 'Me');
            input.value = '';
          }
        }}
        type="text"
        ref={node => {
          input = node;
        }}
      />
    </section>
  );
}

EnhancedInput.propTypes = {
  dispatch: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch(addMessage(message, author));
  },
});

export default connect(null, mapDispatchToProps)(EnhancedInput);
