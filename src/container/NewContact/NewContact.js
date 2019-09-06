import React, { Component } from 'react'
import { Formik } from 'formik'
import { axios } from '../../util'
import { Button } from '@material-ui/core'
import AppHeader from '../../component/AppHeader/AppHeader';
import MainTemplate from '../../template/MainTemplate'
import PhoneBookForm from '../../component/PhoneBookForm'
import Notification from '../../component/Notification'
import Loading from '../../component/Loading'

class ContactDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: false,
      notificationOpen: false
    }
  }

  handleHistoryBack = () => {
    this.props.history.push('/')
  }

  saveData = payload => {
    this.setState({ isLoading: true })
    axios.post(`phoneList`, payload).then(() => {
      this.setState({ isLoading: false, notificationOpen:true })
    })
  }

  handleNotificationClose = () =>  this.setState({ notificationOpen: false })

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
                <PhoneBookForm 
                  handleChange={formikProps.handleChange} 
                  values={formikProps.values} 
                />
              </form>
            )}
          />
        )}
        <Notification
          handleOpen={this.state.notificationOpen}
          handleClose={this.handleNotificationClose}
          NotificationText="Contato Salvo com sucesso!"
        />
      </MainTemplate>
    )
  }
}

export default ContactDetail
