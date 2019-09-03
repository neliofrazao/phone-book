import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PhoneBook  from './container/PhoneBook'

const RenderPhoneBook = () => {
  return(
    <Switch>
      <Route exact path='/' component={PhoneBook} />
    </Switch>
  )
}

export default RenderPhoneBook