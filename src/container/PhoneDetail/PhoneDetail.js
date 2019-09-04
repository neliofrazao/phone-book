import React, { Component } from 'react'
import { axios } from '../../util'
import { Avatar, Button, Grid, Paper, Typography } from '@material-ui/core'
import {  PersonPinCircle, PhoneAndroidRounded } from '@material-ui/icons'
import AppHeader from '../../component/AppHeader/AppHeader';
import MainTemplate  from '../../template/MainTemplate'
import PhoneContentItens from '../../component/PhoneContentItens'
import Loading from '../../shared/Loading'
import './PhoneDetail.styles.css'

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
      console.log(data)
      this.setState({ isLoading: false, phoneDetail: data })
    })
  }

  componentDidMount() {
    this.getPhoneDetail()
  }

  render() {
    return(
      <MainTemplate>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <>
            <AppHeader title={`${this.state.phoneDetail.name}`} >
              <Button 
                variant="contained" 
                color="primary" 
                size="small"
                onClick={this.handleNewContact}
              >
                Novo Contato
              </Button>
            </AppHeader>
            <Paper className="phone-detail">
              <Grid item xs={12} className="phone-detail-content">
                <Avatar className="phone-detail-avatar">
                  <PersonPinCircle />
                </Avatar>
                <Typography variant="body1" gutterBottom>
                  {this.state.phoneDetail.name} ({this.state.phoneDetail.nickName})
                </Typography>
              </Grid>

              <Typography variant="body1" gutterBottom>
                {this.state.phoneDetail.email}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {this.state.phoneDetail.phoneNumer}
              </Typography>
            </Paper>
          </>
        )}
      </MainTemplate>
    )
  }
}

export default PhoneDetail
