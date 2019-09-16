import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, Grid, Typography, withStyles } from '@material-ui/core'
import style from './ContactItens.style'

const ContactItens = ({ classes, contactContentText, contactIcon }) => (
  <Grid item xs={12} className={classes.root}>
    <Avatar className={classes.avatar}>{contactIcon}</Avatar>
    <Typography variant="body1" gutterBottom>
      {contactContentText}
    </Typography>
  </Grid>
)

ContactItens.propTypes = {
  classes: PropTypes.object.isRequired,
  contactContentText: PropTypes.string.isRequired,
  contactIcon: PropTypes.func.isRequired,
}

export default withStyles(style)(ContactItens)
