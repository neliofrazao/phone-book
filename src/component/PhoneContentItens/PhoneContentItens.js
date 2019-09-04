import React from 'react'
import { Avatar, Grid, Typography } from '@material-ui/core'
import './PhoneContentItens.style'

const PhoneContentItens = ({ icon = null, phoneInfoContent }) => (
  <Grid item xs={12} className="phone-detail-content">
    <Avatar className="phone-detail-avatar">
      {icon()}
    </Avatar>
    <Typography variant="body1" gutterBottom>
      {phoneInfoContent}
    </Typography>
  </Grid>
)

export default PhoneContentItens