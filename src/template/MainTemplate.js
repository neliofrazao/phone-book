import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core';
import  './MainTemplate.styles.css';

const MainTemplate = ({ component: Component, ...rest }) => {
  return (
    <main className="main-template">
      <Grid container justify="center" spacing={3}>
        <Grid item xs={8} className="content">
          <Component {...rest} />
        </Grid>
      </Grid>
    </main>
  )
}

MainTemplate.propTypes = {
  component: PropTypes.func.isRequired,
}

export default MainTemplate