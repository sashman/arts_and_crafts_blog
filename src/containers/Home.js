import React from 'react'
import { getSiteProps, getRouteProps } from 'react-static'
import glamorous from 'glamorous'

const Background = glamorous.div( ({backgroundImageUrl}) => ({
  width: "100%",
  height: "1152px",
  backgroundImage: "url(" + backgroundImageUrl + ")"
}))

const Title = glamorous.h1({
  'marginTop': '0px',
  'paddingLeft': '535px',
  'paddingTop': '70px',
  'fontFamily': "'Pacifico', cursive",
  'fontSize': '100px',
  'color': '#0a1429',
  'marginBottom': '0px'
})
const SubTitle = glamorous.h2({
  'marginTop': '0px',
  'paddingTop': '550px',
  'paddingLeft': '900px',
  'fontFamily': "'Pacifico', cursive",
  'fontSize': '100px',
  'color': '#0a1429',
})

export default getRouteProps(({ title, subTitle, backgroundImageUrl }) => (
  <Background backgroundImageUrl = {backgroundImageUrl}>
    <Title>{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
  </Background>
))
