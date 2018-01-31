import React from 'react'
import { Polyline } from 'react-shapes'
import { getRouteProps } from 'react-static'
import glamorous from 'glamorous'
import mediaQueries from '../mediaQueries'
import Background from '../components/Background'
import NavWrap from '../components/NavWrap'
import colours from '../colourScheme'

const { goldColour, darkBlueColour, blueColour, fontShadow } = colours

const fontFamily = "'Pacifico', cursive"

const BackgroundOverlay = glamorous.div({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  background: `linear-gradient(to right, ${blueColour} 50%, rgba(0,0,0,0))`
})

const Overlay = glamorous.div({
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  background: darkBlueColour,
  opacity: '0.3'
})

const ContentWrap = glamorous.div({
  position: 'absolute',
  top: '0',
  [mediaQueries.phone.portrait]: {
    left: '0',
    right: '0'
  },
  left: '200px',
  maxWidth: '100%'
})

const Title = glamorous.h1({
  margin: '0px',
  fontFamily,
  [mediaQueries.phone.portrait]: {
    fontSize: '2em',
    paddingTop: '2em',
    paddingLeft: '1em'
  },
  fontSize: '5em',
  color: darkBlueColour,
  textShadow: fontShadow,
  horizontalAlign: 'middle'
})

const SubTitle = glamorous.h2({
  marginTop: '0px',
  marginBottom: '0px',
  marginLeft: 'auto',
  marginRight: 'auto',
  fontFamily,
  [mediaQueries.phone.portrait]: {
    fontSize: '2em',
    paddingLeft: '1em'
  },
  fontSize: '5em',
  color: darkBlueColour,
  textShadow: fontShadow,
  horizontalAlign: 'middle'
})

const points = (xOffset, yOffset) => {
  const pointList = [...Array(300).keys()].map(i => {
    const resolution = 20
    const maxRadius = 700
    const resolution2 = resolution / 1.49999999925
    const radius = maxRadius * Math.cos(i / resolution2)
    const y = Math.cos(i / resolution + 10) * radius + yOffset
    const x = Math.sin(i / resolution + 10) * radius + xOffset
    return `${x},${y}`
  })

  return pointList.join(' ')
}

const Pattern = glamorous(Polyline)({
  // animation: 'ckw 60s linear infinite',
  // width: 'auto',
  // transformOrigin: '50% 50%'
})

export default getRouteProps(({ title, subTitle, backgroundImageUrl, postTitles }) => (
  <div>
    <Background backgroundImageUrl={backgroundImageUrl}>
      <Overlay />
      <BackgroundOverlay>
        <NavWrap postTitles={postTitles} />
        <ContentWrap>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </ContentWrap>
        <Pattern
          points={points(20, 700)}
          fill={{ color: 'none' }}
          stroke={{ color: goldColour }}
          strokeWidth={20}
        />
      </BackgroundOverlay>
    </Background>
  </div>
))
