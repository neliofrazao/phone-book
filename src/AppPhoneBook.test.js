import React from 'react';
import ReactDOM from 'react-dom';
import AppPhoneBook from './AppPhoneBook';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppPhoneBook />, div);
  ReactDOM.unmountComponentAtNode(div);
});
