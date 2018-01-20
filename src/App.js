import React from 'react'
import { Router, Link } from 'react-static'
import glamorous from 'glamorous'
//
import Routes from 'react-static-routes'

import './app.css'

const AppStyles = glamorous.div({
  fontFamily:
    "'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: '300',
  fontSize: '16px',
  margin: '0',
  padding: '0',
  '& .content': {
    padding: '0',
  },
})

export default () => (
  <Router>
    <AppStyles>
      <div className="content">
        <Routes />
      </div>
    </AppStyles>
  </Router>
)
