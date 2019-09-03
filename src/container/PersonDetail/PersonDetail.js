import React, { Component } from 'react'
import { Paper } from '@material-ui/core'
import AppHeader from '../../component/AppHeader/AppHeader';
import MainTemplate  from '../../template/MainTemplate'
import getPersonDetail from '../../api/personDetail'

class PersonDetail extends Component {
  constructor(props){
    super(props)
    this.state = { phoneGridRows: []}
  }
  
  personDetail = () => {
    getPersonDetail(this.props.match.params.id)
    .then( lists => {
      this.setState({ phoneGridRows: lists })
    })
  }

  componentDidMount() {
    this.personDetail()
  }

  render() {
    const { match } = this.props
    return(
      <MainTemplate>
        <AppHeader title="Nome da pessoa" />
         <Paper>
            {/* <ul>
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
            </ul> */}
         </Paper>
      </MainTemplate>
    )
  }
}

export default PersonDetail
