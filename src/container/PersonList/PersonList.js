import React, { Component } from 'react'
import { Paper, Button } from '@material-ui/core'
import { axios } from '../../util'
import AppHeader from '../../component/AppHeader/AppHeader';
import MainTemplate  from '../../template/MainTemplate'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';;

class PersonList extends Component {
  constructor(props){
    super(props)
    this.state = { listPersonGrid : [] }
  }

  getPerson = () => {
    axios.get('phoneList').then( list => {
      this.setState({ listPersonGrid: list.data })
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
         <Paper>
          <List dense>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Single-line item" />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
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

export default PersonList
