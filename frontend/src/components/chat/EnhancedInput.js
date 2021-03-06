import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Message from '@material-ui/icons/Message';
import Send from '@material-ui/icons/Send';
import { addMessage } from '../../actions';
import styles from './styles';


function EnhancedInput(props) {
  let input;
  const { classes } = props;
  return (
    <section className="chat__message" id="new-message">
      <FormControl fullWidth>
        <InputLabel htmlFor="inputLabel">Your message here...</InputLabel>
        <Input
          id="inputLabel"
          type="text"
          onKeyPress={e => {
            if (e.key === 'Enter') {
              props.addMessage(input.value, 'Me');
              input.value = '';
            }
          }}
          inputRef={node => { input = node; }}
          startAdornment={
            <InputAdornment position="start">
              <Message color="secondary" />
            </InputAdornment>
          } />
        </FormControl>
        <Button
          onClick={() => { props.addMessage(input.value, 'Me'); input.value = ''; }}
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}>
          Send
          <Send color="secondary" className={classes.rightIcon} />
        </Button>
    </section>
  );
}

EnhancedInput.propTypes = {
  addMessage: PropTypes.func,
  classes: PropTypes.object,
};

const mapDispatchToProps = {
  addMessage,
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(EnhancedInput));
