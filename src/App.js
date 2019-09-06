import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PhoneBook  from './container/PhoneBook'
import ContactDetail  from './container/ContactDetail'
import NewContact  from './container/NewContact'

const RenderPhoneBook = () => {
  return(
    <Switch>
      <Route exact path='/' component={PhoneBook} />
      <Route exact path='/contact-detail/:contactId' component={ContactDetail} />
      <Route exact path='/new-contact/' component={NewContact} />
    </Switch>
  )
}

export default RenderPhoneBook