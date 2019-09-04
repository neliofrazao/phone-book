import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PhoneBook  from './container/PhoneBook'
import PhoneDetail  from './container/PhoneDetail'

const RenderPhoneBook = () => {
  return(
    <Switch>
      <Route exact path='/' component={PhoneBook} />
      <Route exact path='/phone-detail/:phoneId' component={PhoneDetail} />
    </Switch>
  )
}

export default RenderPhoneBook