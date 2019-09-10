import React, { Component } from 'react'
import { Formik } from 'formik'
import { Button } from '@material-ui/core'
import * as Yup from 'yup'
import AppHeader from '../../component/AppHeader/AppHeader';
import PhoneBookForm from '../../component/PhoneBookForm'
import Notification from '../../component/Notification'
import Loading from '../../component/Loading'
import phoneBook from  '../../api/PhoneBook/PhoneBook'
import { windowTitle } from '../../util/constants/constants'

const PAGE_TITLE = 'New Contact'
const WINDOW_TITLE = `${PAGE_TITLE} ${windowTitle.TITLE}`
const REQUIRED_MESSAGE = 'Campo obrigatório'

const schema = Yup.object().shape({
  name: Yup.string().required(REQUIRED_MESSAGE),
  nickName: Yup.string().required(REQUIRED_MESSAGE),
  email: Yup.string().email('Digite um email válido').required(REQUIRED_MESSAGE),
  phoneNumber: Yup.string().required(REQUIRED_MESSAGE)
})

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

  saveData = async payload => {
    this.setState({ isLoading: true })
    try {
      await phoneBook.createNewContact(payload)
      this.setState({ notificationOpen: true })
    } catch (error) {
      console.log(error)
    }
    this.setState({ isLoading: false })
  }

  handleNotificationClose = () => this.setState({ notificationOpen: false })

  render() {
    return (
      <>
        <AppHeader pageTitle={PAGE_TITLE} windowTitle={WINDOW_TITLE} >
          <Button variant="contained" color="primary" onClick={this.handleHistoryBack} >
            Agenda Telefônica
          </Button>
        </AppHeader>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <Formik
            onSubmit={this.saveData}
            validationSchema={schema}
            render={formikProps => (
              <form onSubmit={formikProps.handleSubmit}>
                <PhoneBookForm
                  errors={formikProps.errors}
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
      </>
    )
  }
}

export default ContactDetail
