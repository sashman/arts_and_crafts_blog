import React from 'react'
import { getSiteProps, getRouteProps } from 'react-static'
import glamorous from 'glamorous'
//
import logoImg from '../logo.png'

const LogoImage = glamorous.img({
  maxWidth: '100%',
})

export default getRouteProps(({ test }) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
    
  </div>
))
