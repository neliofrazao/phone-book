import React from 'react'
import { Button, Grid, Paper, TextField } from '@material-ui/core'

const PhoneBookForm = ({ values, handleChange }) => (
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
            onChange={handleChange}
            margin="normal"
          />
        </Grid>
      </Grid>
    </Paper>
    <Paper className="action-bar">
      <Button variant="contained" color="primary" type="submit" >
        Salvar
      </Button>
    </Paper>
  </>
)

export default PhoneBookForm