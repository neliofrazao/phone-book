import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid, Paper, withStyles } from '@material-ui/core'
import ActionBar from '../ActionBar'
import InputField from '../InputField'
import style from './PhoneBookForm.styles'

const PhoneBookForm = ({ classes, errors, handleChange, values }) => (
  <>
    <Paper className={classes.root}>
      <Grid container justify="center" spacing={3}>
        <Grid item md={12} lg={6}>
          <InputField
            id="name"
            label="Nome"
            values={values.name || ''}
            errors={errors.name || ''}
            handleChange={handleChange}
          />
        </Grid>
        <Grid item md={12} lg={6}>
          <InputField
            id="nickName"
            label="Apelido"
            values={values.nickName || ''}
            errors={errors.nickName || ''}
            handleChange={handleChange}
          />
        </Grid>
        <Grid item md={12} lg={6}>
          <InputField
            id="email"
            label="Email"
            type="email"
            values={values.email || ''}
            errors={errors.email || ''}
            handleChange={handleChange}
          />
        </Grid>
        <Grid item md={12} lg={6}>
          <InputField
            withMask
            id="phoneNumber"
            label="Telefone"
            values={values.phoneNumber || ''}
            errors={errors.phoneNumber || ''}
            handleChange={handleChange}
            inputProps={{
              options: {
                numericOnly: true,
                delimiters: ['(', ') ', '-'],
                blocks: [0, 2, 5, 4],
              },
            }}
          />
        </Grid>
      </Grid>
    </Paper>
    <ActionBar>
      <Button variant="contained" color="primary" type="submit">
        Salvar
      </Button>
    </ActionBar>
  </>
)

PhoneBookForm.propTypes = {
  classes: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
}

export default withStyles(style)(PhoneBookForm)
