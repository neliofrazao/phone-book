import React from 'react'
import { Avatar, Grid, Typography } from '@material-ui/core'
import './ContactItens.style.css'

const ContactItens = ({ icon, phoneContentText }) => (
  <Grid item xs={12} className="phone-detail-content">
    <Avatar className="phone-detail-avatar">
      {icon}
    </Avatar>
    <Typography variant="body1" gutterBottom>
      {phoneContentText}
    </Typography>
  </Grid>
)

export default ContactItens