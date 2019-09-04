import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core';

const EmptySatate = ({ emptySatateText }) => (
  <Paper className="phone-detail">
    <Grid container justify="center" alignItems="center">
      <Typography variant="body1" gutterBottom>
        {emptySatateText}
      </Typography>
    </Grid>
  </Paper>
)

export default EmptySatate