import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid, Paper, TextField } from '@material-ui/core'
import ActionBar from '../ActionBar'

const PhoneBookForm = ({ errors, values, handleChange }) => (
  <>
    <Paper className="contact-detail">
      <Grid container justify="center" spacing={3}>
        <Grid item md={12} lg={6}>
          <TextField
            fullWidth
            id="name"
            label="Nome"
            name="name"
            value={values.name || ''}
            error={Boolean(errors.name)}
            helperText={errors.name}
            onChange={handleChange}
            margin="normal"
          />
        </Grid>
        <Grid item md={12} lg={6}>
          <TextField
            fullWidth
            id="nickName"
            label="Apelido"
            name="nickName"
            value={values.nickName || ''}
            error={Boolean(errors.nickName)}
            helperText={errors.nickName}
            onChange={handleChange}
            margin="normal"
          />
        </Grid>
        <Grid item md={12} lg={6}>
          <TextField
            fullWidth
            id="email"
            label="Email"
            type="email"
            name="email"
            value={values.email || ''}
            error={Boolean(errors.email)}
            helperText={errors.email}
            onChange={handleChange}
            margin="normal"
          />
        </Grid>
        <Grid item md={12} lg={6}>
          <TextField
            fullWidth
            id="phoneNumber"
            label="Telefone"
            name="phoneNumber"
            value={values.phoneNumber || ''}
            error={Boolean(errors.phoneNumber)}
            helperText={errors.phoneNumber}
            onChange={handleChange}
            margin="normal"
          />
        </Grid>
      </Grid>
    </Paper>
    <ActionBar>
      <Button variant="contained" color="primary" type="submit" >
        Salvar
      </Button>
    </ActionBar>
  </>
)

PhoneBookForm.prototype = {
  values: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default PhoneBookForm