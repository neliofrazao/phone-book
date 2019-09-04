import React, { Component } from 'react'
import { axios } from '../../util'
import { Button } from '@material-ui/core'
import AppHeader from '../../component/AppHeader/AppHeader';
import MainTemplate  from '../../template/MainTemplate'
import PhoneList from '../../component/PhoneList'
import Loading from '../../shared/Loading'

class PhoneBook extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      phoneList : [],
    }
  }

  getPhoneBooklist = () => {
    axios.get('phoneList').then(({ data }) => {
      this.setState({ isLoading: false, phoneList: data })
    })
  }

  handlePhoneDetail = phoneId => {
    this.props.history.push(`phone-detail/${phoneId}`)
  }

  handleNewContact = () => {
    this.props.history.push(`new-contact`)
  }

  handleDeletePhone = phoneId => {
    this.setState({ isLoading:true })
    axios.delete(`phoneList/${phoneId}`).then(() => this.getPhoneBooklist())
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
              <Button 
                variant="contained" 
                color="primary" 
                size="small"
                onClick={this.handleNewContact}
              >
                Novo Contato
              </Button>
            </AppHeader>
            <PhoneList
              phones={this.state.phoneList}
              handlePhoneDetail={this.handlePhoneDetail}
              handleDeletePhone={this.handleDeletePhone}
            />
          </>
        )}
      </MainTemplate>
    )
  }
}

export default PhoneBook
