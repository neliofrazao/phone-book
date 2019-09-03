import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Helmet } from 'react-helmet'

const AppHeader = ({ title }) => (
  <header>

    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h3" component="h1" gutterBottom>
          {title}
        </Typography>
      </Grid>
    </Grid>
  </header>

)

export default AppHeader