import React from 'react'
import PropTypes from 'prop-types'
import { Grid, withStyles } from '@material-ui/core';
import styles from './MainTemplate.styles';

const MainTemplate = ({ classes, component: Component, ...rest }) => {
  return (
    <main className={classes.root}>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={8} className="content">
          <Component {...rest} />
        </Grid>
      </Grid>
    </main>
  )
}

MainTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
  component: PropTypes.func.isRequired,
}


export default withStyles(styles)(MainTemplate)