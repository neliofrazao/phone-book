import React, { Component } from 'react'
import { Paper, Button } from '@material-ui/core'
import { axios } from '../../util'
import AppHeader from '../../component/AppHeader/AppHeader';
import MainTemplate  from '../../template/MainTemplate'
import PhoneList from '../../component/PhoneList'

class PhoneBook extends Component {
  constructor(props){
    super(props)
    this.state = { listPersonGrid : [] }
  }

  getPerson = () => {
    axios.get('phoneList').then(({ data }) => {
      this.setState({ listPersonGrid: data })
    })
  }

  handlePersonDetail = personId => {
    this.props.history.push(`person-detail/${personId}`)
  }

  componentDidMount() {
    this.getPerson()
  }

  render() {
    return(
      <MainTemplate>
        <AppHeader title="Página de listagem" />
         <PhoneList />
         <Paper>
          <ul>
              {this.state.listPersonGrid.map(person =>
                <li key={person.id}>
                  Nome: {person.nome} - 
                  Telefone: {person.telefone} - 
                  Apelido: {person.apelido}
                  <Button onClick={() => this.handlePersonDetail(person.id)} variant="contained" >
                    Default
                  </Button>
                </li>
              )}
          </ul>
         </Paper>
      </MainTemplate>
    )
  }
}

export default PhoneBook
