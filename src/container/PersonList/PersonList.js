import React, { Component } from 'react'
import { Paper, Button } from '@material-ui/core'
import { axios } from '../../util'
import AppHeader from '../../component/AppHeader/AppHeader';
import MainTemplate  from '../../template/MainTemplate'

class PersonList extends Component {
  constructor(props){
    super(props)
    this.state = {
      listPersonGrid : []
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
