import React, { Component } from 'react'
import { Paper, Button } from '@material-ui/core'
import { axios } from '../../util'
import AppHeader from '../../component/AppHeader/AppHeader';
import MainTemplate  from '../../template/MainTemplate'

class PersonList extends Component {
  constructor(props){
    super(props)
    this.state = {
      listPersonGrid : [
        { nome: 'Pessoa 1', telefone: '8888-8855', apelido: 'João'},
        { nome: 'Pessoa 2', telefone: '8888-8844', apelido: 'Maria'},
        { nome: 'Pessoa 3', telefone: '8888-8833', apelido: 'José'},
      ]
    }
  }
  
  person = () => {
    axios.get('phoneList').then( list => {
      this.setState({ listPersonGrid: list.data })
    })
  }

  handleClick = personId => {
    this.props.history.push(`person-detail/${personId}`)
  }

  componentDidMount() {
    this.person()
  }

  render() {
    return(
      <MainTemplate>
        <AppHeader title="Página de listagem" />
         <Paper>
            <ul>
                {this.state.listPersonGrid.map(person =>
                  <li key={person.id}>
                    Nome: {person.nome} - 
                    Telefone: {person.telefone} - 
                    Apelido: {person.apelido}
                    <Button onClick={() => this.handleClick(person.id)} variant="contained" >
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

export default PersonList
