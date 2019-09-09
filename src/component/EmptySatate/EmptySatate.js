import React from 'react'
import PropTypes from 'prop-types'
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

EmptySatate.prototype = {
  emptySatateText: PropTypes.string.isRequired
}

export default EmptySatate