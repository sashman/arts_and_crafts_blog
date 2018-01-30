import React from 'react'
import { getRouteProps } from 'react-static'
import glamorous from 'glamorous'
import Background from '../components/Background'
import mediaQueries from '../mediaQueries'
import colours from '../colourScheme'

const { darkBlueColour, fontShadow } = colours
const fontFamily = "'Pacifico', cursive"
//

const Title = glamorous.h1({
  margin: '0px',
  fontFamily,
  [mediaQueries.phone.portrait]: {
    fontSize: '2em',
    paddingTop: '2em',
    paddingLeft: '1em'
  },
  fontSize: '7em',
  color: darkBlueColour,
  textShadow: fontShadow,
  horizontalAlign: 'middle'
})

export default getRouteProps(({ post }) => (
  <div>
    <Background backgroundImageUrl={post.featuredImage.fields.file.url}>
      <Title>{post.title}</Title>
    </Background>
  </div>
))
