import React from 'react'
import { CircularProgress, Grid } from '@material-ui/core';
import './Loading.styles.css'

const Loading = () => (
  <Grid container justify="center" alignItems="center">
    <CircularProgress className="circular-progress" />
  </Grid>
)

export default Loading