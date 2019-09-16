import React from 'react'
import MainTemplate from '../../template/MainTemplate'

const withMainTemplate = BaseComponent => props => (
  <MainTemplate component={BaseComponent} {...props} />
)

export default withMainTemplate
