import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMessage } from '../../actions';

function EnhancedInput(props) {
  let input;
  return (
    <section className="chat__message" id="new-message">
      <input
        onKeyPress={e => {
          if (e.key === 'Enter') {
            props.addMessage(input.value, 'Me');
            input.value = '';
          }
        }}
        type="text"
        ref={node => {
          input = node;
        }}
      />
      <input
        onClick={() => { props.addMessage(input.value, 'Me'); input.value = ''; }}
        type='submit'
        value='Send'/>
    </section>
  );
}

EnhancedInput.propTypes = {
  addMessage: PropTypes.func,
};

const mapDispatchToProps = {
  addMessage,
};

export default connect(null, mapDispatchToProps)(EnhancedInput);
