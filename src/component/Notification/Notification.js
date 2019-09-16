import React from 'react'
import PropTypes from 'prop-types'
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
    <SnackbarContent onClose={handleClose} message={NotificationText} />
  </Snackbar>
)

Notification.prototype = {
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  NotificationText: PropTypes.string.isRequired,
}

export default Notification
