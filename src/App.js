import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PhoneBook  from './container/PhoneBook'
import PersonDetail from './container/PersonDetail'

const RenderPhoneBook = () => {
  return(
    <Switch>
      <Route exact path='/' component={PhoneBook} />
      <Route exact path='/person-detail/:id' component={PersonDetail} />
    </Switch>
  )
}

export default RenderPhoneBook