import React, { Component } from 'react'
import { Formik } from 'formik'
import { axios } from '../../util'
import { Button, Grid, Paper, TextField } from '@material-ui/core'
import AppHeader from '../../component/AppHeader/AppHeader';
import MainTemplate from '../../template/MainTemplate'
import Loading from '../../component/Loading'

class ContactDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: false,
    }
  }
  
  getContactDetail = () => {
    const contactId = this.props.match.params.contactId
    axios.get(`phoneList/${contactId}`).then(({ data }) => {
      this.setState({ isLoading: false, contactDetail: data })
    })
  }

  handleHistoryBack = () => {
    this.props.history.push('/')
  }

  saveData = payload => {
    this.setState({ isLoading: true })
    axios.post(`phoneList`, payload).then(() => {
      this.setState({ isLoading: false })
    })
  }

  render() {
    return (
      <MainTemplate>
        <AppHeader title="Novo Contato" >
          <Button variant="contained" color="primary" onClick={this.handleHistoryBack} >
            Agenda Telefônica
          </Button>
        </AppHeader>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <Formik
              onSubmit={this.saveData}
              render={formikProps => (
                <form onSubmit={formikProps.handleSubmit}>
                  <Paper className="contact-detail">
                    <Grid container justify="center" spacing={3}>
                      <Grid item md={12} lg={6}>
                        <TextField
                          fullWidth
                          id="name"
                          label="Nome"
                          name="name"
                          value={formikProps.values.name || ''}
                          onChange={formikProps.handleChange}
                          margin="normal"
                        />
                      </Grid>
                      <Grid item md={12} lg={6}>
                        <TextField
                          fullWidth
                          id="nickName"
                          label="Apelido"
                          name="nickName"
                          value={formikProps.values.nickName || ''}
                          onChange={formikProps.handleChange}
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
                          value={formikProps.values.email || ''}
                          onChange={formikProps.handleChange}
                          margin="normal"
                        />
                      </Grid>
                      <Grid item md={12} lg={6}>
                        <TextField
                          fullWidth
                          id="phoneNumber"
                          label="Telefone"
                          name="phoneNumber"
                          value={formikProps.values.phoneNumber || ''}
                          onChange={formikProps.handleChange}
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
                </form>
            )}
          />
        )}
        
      </MainTemplate>
    )
  }
}

export default ContactDetail
