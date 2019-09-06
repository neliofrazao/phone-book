import React from 'react'
import { Snackbar, SnackbarContent } from '@material-ui/core'

const Notification = ({ handleOpen, handleClose, NotificationText }) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    open={handleOpen}
    autoHideDuration={6000}
    onClose={handleClose}
  >
    <SnackbarContent
      onClose={handleClose}
      message={NotificationText}
    />
  </Snackbar>
)

export default Notification