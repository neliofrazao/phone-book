import React, { Component } from 'react'
import { Button, Paper } from '@material-ui/core'
import { axios } from '../../util'
import AppHeader from '../../component/AppHeader/AppHeader';
import MainTemplate  from '../../template/MainTemplate'
import PhoneList from '../../component/PhoneList'

class PhoneBook extends Component {
  constructor(props){
    super(props)
    this.state = { phoneList : [] }
  }

  getPerson = () => {
    axios.get('phoneList').then(({ data }) => {
      this.setState({ phoneList: data })
    })
  }

  handlePhoneDetail = phoneId => {
    this.props.history.push(`phone-detail/${phoneId}`)
  }

  componentDidMount() {
    this.getPerson()
  }

  render() {
    return(
      <MainTemplate>
        <AppHeader title="Página de listagem" />
         <PhoneList 
          phones={this.state.phoneList}
          handlePhoneDetail={this.handlePhoneDetail}
        />
      </MainTemplate>
    )
  }
}

export default PhoneBook
