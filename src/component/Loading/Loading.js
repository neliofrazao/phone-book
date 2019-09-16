import React from 'react'
import { CircularProgress, Grid } from '@material-ui/core'

const Loading = () => (
  <Grid container justify="center" alignItems="center">
    <CircularProgress className="circular-progress" />
  </Grid>
)

export default Loading
