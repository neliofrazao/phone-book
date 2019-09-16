import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import AppHeader from '../../component/AppHeader/AppHeader'
import CardsPhoneBook from '../../component/CardsPhoneBook'
import Loading from '../../component/Loading'
import phoneBook from '../../api/PhoneBook/PhoneBook'

const PAGE_TITLE = 'Phone Book'

class PhoneBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      phoneList: [],
    }
  }

  getPhoneBooklist = async () => {
    this.setState({ isLoading: true })
    try {
      const phoneListData = await phoneBook.getPhoneBookList()
      this.setState({ phoneList: phoneListData })
    } catch (error) {
      console.log(error)
    }
    this.setState({ isLoading: false })
  }

  handleContactDetail = contactId => {
    this.props.history.push(`contact-detail/${contactId}`)
  }

  handleNewContact = () => {
    this.props.history.push(`new-contact`)
  }

  handleDeleteContact = async contactId => {
    try {
      await phoneBook.deleteContact(contactId)
      this.getPhoneBooklist()
    } catch (error) {
      console.log(error)
      this.setState({ isLoading: false })
    }
  }

  componentDidMount() {
    this.getPhoneBooklist()
  }

  render() {
    return (
      <>
        <AppHeader pageTitle={PAGE_TITLE}>
          <Button variant="contained" color="primary" onClick={this.handleNewContact}>
            Novo Contato
          </Button>
        </AppHeader>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <CardsPhoneBook
            phones={this.state.phoneList}
            handleContactDetail={this.handleContactDetail}
            handleDeleteContact={this.handleDeleteContact}
          />
        )}
      </>
    )
  }
}

export default PhoneBook
