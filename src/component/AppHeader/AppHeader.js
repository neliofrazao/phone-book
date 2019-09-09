import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Helmet } from 'react-helmet'
import  './AppHeader.styles.css';

const AppHeader = ({ windowTitle= 'Phone Book', pageTitle, children }) => (
  <header className="header">
    <Helmet>
      <title>{windowTitle}</title>
    </Helmet>
    <Grid container spacing={3}>
      <Grid item sm={12} md >
        <Typography variant="h3" component="h1" gutterBottom>
          {pageTitle}
        </Typography>
      </Grid>
      <Grid item sm={12} md className="text-right">
          {children}
      </Grid>
    </Grid>
  </header>

)

export default AppHeader