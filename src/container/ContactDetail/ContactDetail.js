import React, { Component } from 'react'
import {  Button, Paper } from '@material-ui/core'
import { 
  EmailRounded,
  Edit,
  KeyboardArrowLeftRounded,
  PersonPinCircle,
  PhoneAndroidRounded
} from '@material-ui/icons'
import AppHeader from '../../component/AppHeader/AppHeader';
import MainTemplate  from '../../template/MainTemplate'
import ContactItens from '../../component/ContactItens'
import Loading from '../../component/Loading'
import phoneBook from  '../../api/PhoneBook/PhoneBook'
import ActionBar from '../../component/ActionBar'
import './ContactDetail.styles.css'

class ContactDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: false,
      contactDetail : [],
    }
  }

  getContactDetail = async () => {
    this.setState({ isLoading: true })
    try {
      const contactId = this.props.match.params.contactId
      const getContactInfo = await phoneBook.getContactInfo(contactId)
      this.setState({ contactDetail: getContactInfo })
    }
    catch(error) {
      console.log(error)
    }
    this.setState({ isLoading: false})
  }

  handleNewContact = () => {
    this.props.history.push('/new-contact')
  }

  handleEditContact = contactId => {
    this.props.history.push(`/edit-contact${contactId}`)
  }

  handleHistoryBack = () => {
    this.props.history.push('/')
  }

  componentDidMount() {
    this.getContactDetail()
  }

  render() {
    const nameIcon = <PersonPinCircle />
    const emailIcon = <EmailRounded />
    const phoneNumberIcon = <PhoneAndroidRounded />
    const { id, name, nickName, email, phoneNumber } = this.state.contactDetail
    
    return(
      <MainTemplate>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <>
            <AppHeader title={name} >
              <Button  variant="contained" color="primary" onClick={this.handleNewContact} >
                Novo Contato
              </Button>
            </AppHeader>
            <Paper className="contact-detail">
              <ContactItens icon={nameIcon} phoneContentText={`${name} (${nickName})`}/>
              <ContactItens icon={emailIcon} phoneContentText={email} />
              <ContactItens icon={phoneNumberIcon} phoneContentText={phoneNumber} />
            </Paper>
            <ActionBar>
              <Button 
                variant="contained" 
                className="action-bar-buttons" 
                onClick={() => this.handleEditContact(id)}
              >
                <Edit />
                Editar Contato
              </Button>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={this.handleHistoryBack}
              >
                <KeyboardArrowLeftRounded />
                Voltar
              </Button>
            </ActionBar>
          </>
        )}
      </MainTemplate>
    )
  }
}

export default ContactDetail
