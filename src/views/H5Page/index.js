import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '415px',
    height: '707px',
    margin: '0 auto',
    padding: theme.spacing(2)
  },
}));

export default function H5Page() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <iframe
        src="https://chudequan8.github.io/react-h5-demo"
        id="show"
        title="h5-demo"
        width="100%"
        height="100%"
        frameBorder="0"
        name="showHere"
      ></iframe>
    </Paper>
  )
}