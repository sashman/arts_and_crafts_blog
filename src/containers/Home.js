import React from 'react'
import { getSiteProps, getRouteProps } from 'react-static'
import glamorous from 'glamorous'

const LogoImage = glamorous.img({
  maxWidth: '100%',
})

const Background = glamorous.div( ({backgroundImageUrl}) => ({
  width: "100%",
  height: "1152px",
  backgroundImage: "url(" + backgroundImageUrl + ")"
}))

export default getRouteProps(({ title, subTitle, backgroundImageUrl }) => (
  <Background backgroundImageUrl = {backgroundImageUrl}>
    <h1 style={{ textAlign: 'center', 'margin-top': '0px' }}>{title}</h1>
    <h2 style={{ textAlign: 'center' }}>{subTitle}</h2>
  </Background>
))
