import React from "react"
import PropTypes from 'prop-types'
import { Paper, withStyles } from '@material-ui/core'
import styles from'./ActionBar.style'

const ActionBar = ({ children, classes }) => (
  <Paper className={classes.root}>
    { children }
  </Paper>
)

ActionBar.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
}


export default withStyles(styles)(ActionBar)