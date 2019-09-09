import React from "react"
import { Paper } from '@material-ui/core'
import './ActionBar.style.css'

const ActionBar = ({ children }) => (
  <Paper className="action-bar">
    { children }
  </Paper>
)

export default ActionBar