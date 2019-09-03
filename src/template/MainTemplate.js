import React from 'react'
import { Grid } from '@material-ui/core';
import  './MainTemplate.css';

const MainTemplate = ({ children }) => {
  return (
    <main className="main-template">
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12} className="content">
          {children}
        </Grid>
      </Grid>
    </main>
  )
}

export default MainTemplate