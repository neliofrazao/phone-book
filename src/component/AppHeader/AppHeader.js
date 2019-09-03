import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Helmet } from 'react-helmet'
import  './AppHeader.styles.css';

const AppHeader = ({ title }) => (
  <header className="header">
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