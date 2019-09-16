import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, withStyles } from '@material-ui/core'
import { Helmet } from 'react-helmet'
import style from './AppHeader.styles'

const AppHeader = ({ children, classes, pageTitle, windowTitle }) => (
  <header className={classes.root}>
    <Helmet>
      <title>{windowTitle}</title>
    </Helmet>
    <Grid container spacing={3}>
      <Grid item sm={12} md>
        <Typography variant="h3" component="h1" gutterBottom>
          {pageTitle}
        </Typography>
      </Grid>
      <Grid item sm={12} md className={classes.textRight}>
        {children}
      </Grid>
    </Grid>
  </header>
)

AppHeader.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  pageTitle: PropTypes.string.isRequired,
  windowTitle: PropTypes.string,
}

AppHeader.defaultProps = {
  children: null,
  windowTitle: 'Phone Book',
}

export default withStyles(style)(AppHeader)
