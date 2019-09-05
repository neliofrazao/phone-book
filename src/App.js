import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PhoneBook  from './container/PhoneBook'
import ContactDetail  from './container/ContactDetail'

const RenderPhoneBook = () => {
  return(
    <Switch>
      <Route exact path='/' component={PhoneBook} />
      <Route exact path='/contact-detail/:contactId' component={ContactDetail} />
    </Switch>
  )
}

export default RenderPhoneBook