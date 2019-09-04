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

  getPerson = () => {
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
    axios.delete(`phoneList/${phoneId}`).then(() => this.getPerson())
  }

  componentDidMount() {
    this.getPerson()
  }

  render() {
    return(
      <MainTemplate>
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
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <PhoneList
            phones={this.state.phoneList}
            handlePhoneDetail={this.handlePhoneDetail}
            handleDeletePhone={this.handleDeletePhone}
          />
        )}
      </MainTemplate>
    )
  }
}

export default PhoneBook
