import React from 'react'
import PropTypes from 'prop-types'
import Cleave from 'cleave.js/react'
import { TextField } from '@material-ui/core'

const CleaveWrapper = ({ inputRef, ...rest }) => <Cleave htmlRef={inputRef} {...rest} />

CleaveWrapper.propTypes = {
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
}

const Input = ({ errors, handleChange, label, id, values, ...rest }) => (
  <TextField
    {...rest}
    fullWidth
    id={id}
    label={label}
    name={id}
    value={values}
    error={Boolean(errors)}
    helperText={errors}
    onChange={handleChange}
    margin="normal"
  />
)

Input.propTypes = {
  errors: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  values: PropTypes.string.isRequired,
}

const InputField = ({ startAdornment, InputProps, withMask, ...rest }) => (
  <>
    {withMask ? (
      <Input
        {...rest}
        InputProps={{
          ...InputProps,
          inputComponent: CleaveWrapper,
        }}
      />
    ) : (
      <Input
        {...rest}
        InputProps={{
          ...InputProps,
          startAdornment,
        }}
      />
    )}
  </>
)

InputField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  InputProps: PropTypes.object,
  label: PropTypes.string.isRequired,
  startAdornment: PropTypes.element,
  withMask: PropTypes.bool,
}

InputField.defaultProps = {
  InputProps: {},
  withMask: false,
  startAdornment: null,
}

export default InputField
