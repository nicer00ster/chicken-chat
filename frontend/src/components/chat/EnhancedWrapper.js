import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '100%',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
});

function EnhancedWrapper(props) {
  const { classes } = props;
  return (
      <Paper className={classes.root} elevation={1}>
        {props.children}
      </Paper>
  );
}

EnhancedWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedWrapper);
