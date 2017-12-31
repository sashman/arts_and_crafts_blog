import React from 'react'
import {getSiteProps, getRouteProps} from 'react-static'
import glamorous from 'glamorous'

const goldColour = '#C19B53'
const blackColour = 'black'
const whiteColour = 'white'
const darkBlueColour = '#0D0D16'
const blueColour = '#0A142B'

const fontFamily = "'Pacifico', cursive"
const fontShadow = `-2px 0 ${whiteColour}, 0 2px ${whiteColour}, 2px 0 ${whiteColour}, 0 -2px ${whiteColour}`

const Background = glamorous.div(({backgroundImageUrl}) => ({
  width: "100%",
  height: "100vh",
  background: "url(" + backgroundImageUrl + ") right/cover"
}))

const BackgroundOverlay = glamorous.div({width: "100%", height: "100%", 'background': `linear-gradient(to right, ${blueColour} 64%, rgba(0,0,0,0))`})

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
  'position': 'absolute',
  'top': '0',
  '@media (max-width: 970px)': {
    'left': '0',
    'right': '0',
  },
  'left': '200px',
  'maxWidth': '100%'
})

const SideMenu = glamorous.div({
  'zIndex': '100',
  'gridArea': 'side-menu',
  'color': '#FFFFFF ',
  'position': 'fixed',
  'top': '0',
  'bottom': '0',
  '@media (max-width: 970px)': {
    'display': 'fixed',
    'left': '-200px'
  },
  'left': '0',
  'display': 'flex',
  'flexDirection': 'column',
  'justifyContent': 'center',
  'overflow': 'auto'
})

const PostList = glamorous.ul({
  'listStyleType': 'none',
  'margin': '0',
  'padding': '0',
  'width': '200px'
})

const PostListItem = glamorous.li({'backgroundColor': 'rgba(0,0,0,0.3)'})

const PostLink = glamorous.a({'fontFamily': "'Open Sans', sans-serif", 'display': 'inline-block', 'color': 'white', 'padding': '5px 15px'})

const Title = glamorous.h1({
  'margin': '0px',
  'fontFamily': fontFamily,
  '@media (max-width: 970px)': {
    'fontSize': '2em'
  },
  'fontSize': '5em',
  'color': darkBlueColour,
  'textShadow': fontShadow,
  'horizontalAlign': 'middle'
})

const SubTitle = glamorous.h2({
  'marginTop': '0px',
  'marginBottom': '0px',
  'marginLeft': 'auto',
  'marginRight': 'auto',
  'fontFamily': fontFamily,
  '@media (max-width: 970px)': {
    'fontSize': '2em'
  },
  'fontSize': '5em',
  'color': darkBlueColour,
  'textShadow': fontShadow,
  'horizontalAlign': 'middle'
})

export default getRouteProps(({title, subTitle, backgroundImageUrl, postTitles}) => (
<div>
  <SideMenu>
    <PostList>
      {
        postTitles.map(({title, slug}) => (<PostListItem key={slug}>
          <PostLink>{title}</PostLink>
        </PostListItem>))
      }
    </PostList>
  </SideMenu>

  <Background backgroundImageUrl={backgroundImageUrl}>
    <Overlay></Overlay>
    <BackgroundOverlay>
      <ContentWrap>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </ContentWrap>
    </BackgroundOverlay>
  </Background>
</div>))
