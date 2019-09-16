import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import AppPhoneBook from './AppPhoneBook'

ReactDOM.render(
  <BrowserRouter>
    <AppPhoneBook />
  </BrowserRouter>,
  document.getElementById('root'),
)
