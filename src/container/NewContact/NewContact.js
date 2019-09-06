import React, { Component } from 'react'
import { axios } from '../../util'
import { Button, Paper } from '@material-ui/core'
import AppHeader from '../../component/AppHeader/AppHeader';
import MainTemplate from '../../template/MainTemplate'

class ContactDetail extends Component {
  handleHistoryBack = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <MainTemplate>
        <AppHeader title="Novo Contato" >
          <Button variant="contained" color="primary" onClick={this.handleHistoryBack} >
            Agenda Telefônica
          </Button>
        </AppHeader>
        <Paper className="contact-detail">

        </Paper>
        <Paper className="action-bar">
          <Button variant="contained" color="primary" >
            Salvar
          </Button>
        </Paper>
      </MainTemplate>
    )
  }
}

export default ContactDetail
