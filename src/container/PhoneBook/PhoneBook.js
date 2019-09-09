import React, { Component } from 'react'
import { axios } from '../../util'
import { Button } from '@material-ui/core'
import AppHeader from '../../component/AppHeader/AppHeader';
import MainTemplate  from '../../template/MainTemplate'
import PhoneList from '../../component/PhoneList'
import Loading from '../../component/Loading'
import getPhoneBookList from  '../../api/PhoneBook/PhoneBook'
class PhoneBook extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: false,
      phoneList : [],
    }
  }

  getPhoneBooklist = async () => {
    this.setState({ isLoading: true })
    try {
      const phoneList = await getPhoneBookList.getPhoneBookList()
      this.setState({ phoneList: phoneList })
    } catch(error) {
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

  handleDeleteContact = contactId => {
    this.setState({ isLoading:true })
    axios.delete(`phoneList/${contactId}`).then(() => this.getPhoneBooklist())
  }

  componentDidMount() {
    this.getPhoneBooklist()
  }

  render() {
    return(
      <MainTemplate>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <>
            <AppHeader title="Agenda Telefônica" >
              <Button variant="contained" color="primary" onClick={this.handleNewContact}>
                Novo Contato
              </Button>
            </AppHeader>
            <PhoneList
              phones={this.state.phoneList}
              handleContactDetail={this.handleContactDetail}
              handleDeleteContact={this.handleDeleteContact}
            />
          </>
        )}
      </MainTemplate>
    )
  }
}

export default PhoneBook
