import React from 'react'
import { Avatar, Grid, Typography } from '@material-ui/core'
import './ContactItens.style.css'

const ContactItens = ({ contactContentText, contactIcon }) => (
  <Grid item xs={12} className="phone-detail-content">
    <Avatar className="phone-detail-avatar">
      {contactIcon}
    </Avatar>
    <Typography variant="body1" gutterBottom>
      {contactContentText}
    </Typography>
  </Grid>
)

export default ContactItens