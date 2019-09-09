import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'

const InputField = ({ errors, handleChange, label, id, values, ...props }) => (
  <TextField
    fullWidth
    id={id}
    label={label}
    name={id}
    value={values || ''}
    error={Boolean(errors)}
    helperText={errors}
    onChange={handleChange}
    margin="normal"
    {...props}
  />
)

InputField.prototype = {
  errors: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  values: PropTypes.func.isRequired
}


export default InputField