import React, { Component } from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
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

  componentDidMount() {
    this.getPhoneBooklist()
  }

  getPhoneBooklist = async () => {
    this.setState({ isLoading: true })
    try {
      const phoneListData = await phoneBook.getPhoneBookList()
      this.setState({ phoneList: phoneListData })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
    this.setState({ isLoading: false })
  }

  handleNewContact = history => {
    history.push(`new-contact`)
  }

  handleDeleteContact = async contactId => {
    try {
      await phoneBook.deleteContact(contactId)
      this.getPhoneBooklist()
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
      this.setState({ isLoading: false })
    }
  }

  render() {
    const { isLoading, phoneList } = this.state
    const { history } = this.props

    return (
      <>
        <AppHeader pageTitle={PAGE_TITLE}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.handleNewContact(history)}
          >
            Novo Contato
          </Button>
        </AppHeader>
        {isLoading ? (
          <Loading />
        ) : (
          <CardsPhoneBook
            handleDeleteContact={this.handleDeleteContact}
            history={history}
            phones={phoneList}
          />
        )}
      </>
    )
  }
}

PhoneBook.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
}

export default PhoneBook
