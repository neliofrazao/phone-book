import React, { Component } from 'react'
import { axios } from '../../util'
import { Button } from '@material-ui/core'
import AppHeader from '../../component/AppHeader/AppHeader';
import MainTemplate  from '../../template/MainTemplate'
import Loading from '../../shared/Loading'

class PhoneDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      phoneDetail : [],
    }
  }

  getPhoneDetail = () => {
    const phoneId = this.props.match.params.phoneId
    axios.get(`phoneList/${phoneId}`).then(({ data }) => {
      this.setState({ isLoading: false, phoneList: data })
    })
  }


  componentDidMount() {
    this.getPhoneDetail()
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
          <p>Olá</p>
        )}
      </MainTemplate>
    )
  }
}

export default PhoneDetail
