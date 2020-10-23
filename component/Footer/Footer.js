import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs ></Grid>
        <Grid item xs={10}>
          <Paper elevation={0} className={classes.paper}>
              <img src="/assets/img/logo.png" style={{height: "2.3rem"}}/>
              <Typography>
                  CopyRight by us
              </Typography>
          </Paper>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
}