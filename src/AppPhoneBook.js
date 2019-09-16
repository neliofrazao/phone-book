import React from 'react'
import { Switch, Route } from 'react-router-dom'
import withMainTemplate from './enhancers/WithMainTemplate'
import PhoneBook from './container/PhoneBook'
import ContactDetail from './container/ContactDetail'
import NewContact from './container/NewContact'

const RenderPhoneBook = () => {
  return (
    <Switch>
      <Route exact path="/" component={PhoneBook} />
      <Route exact path="/contact-detail/:contactId" component={ContactDetail} />
      <Route exact path="/new-contact/" component={NewContact} />
    </Switch>
  )
}

const Component = withMainTemplate(RenderPhoneBook)

const AppPhoneBook = props => {
  return <Component {...props} />
}

export default AppPhoneBook
