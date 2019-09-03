import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PersonList  from './container/PersonList'
import PersonDetail from './container/PersonDetail'

const RenderPhoneBook = () => {
  return(
    <Switch>
      <Route exact path='/' component={PersonList} />
      <Route exact path='/person-detail/:id' component={PersonDetail} />
    </Switch>
  )
}

export default RenderPhoneBook