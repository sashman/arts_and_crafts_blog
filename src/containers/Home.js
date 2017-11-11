import React from 'react'
import { getSiteProps, getRouteProps } from 'react-static'
import glamorous from 'glamorous'

const LogoImage = glamorous.img({
  maxWidth: '100%',
})

export default getRouteProps(({ title, subTitle, backgroundImageUrl }) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>{title}</h1>
    <h2 style={{ textAlign: 'center' }}>{subTitle}</h2>
    <LogoImage src={backgroundImageUrl} alt="" />
  </div>
))
