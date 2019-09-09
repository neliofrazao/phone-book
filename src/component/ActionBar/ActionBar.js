import React from "react"
import PropTypes from 'prop-types'
import { Paper } from '@material-ui/core'
import './ActionBar.style.css'

const ActionBar = ({ children }) => (
  <Paper className="action-bar">
    { children }
  </Paper>
)

ActionBar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ActionBar