import React from 'react'
import { Grid } from '@material-ui/core';
import  './MainTemplate.styles.css';

const MainTemplate = ({ children }) => {
  return (
    <main className="main-template">
      <Grid container justify="center" spacing={3}>
        <Grid item xs={8} className="content">
          {children}
        </Grid>
      </Grid>
    </main>
  )
}

export default MainTemplate