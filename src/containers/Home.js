import React from 'react'
import { getRouteProps } from 'react-static'
import glamorous from 'glamorous'
import mediaQueries from '../mediaQueries'

// const goldColour = '#C19B53'
// const blackColour = 'black'
const whiteColour = 'white'
const darkBlueColour = '#0D0D16'
const blueColour = '#0A142B'

const fontFamily = "'Pacifico', cursive"
const fontShadow = `-2px 0 ${whiteColour}, 0 2px ${whiteColour}, 2px 0 ${whiteColour}, 0 -2px ${whiteColour}`

const Background = glamorous.div(({ backgroundImageUrl }) => ({
  width: '100%',
  height: '100vh',
  background: `url(${backgroundImageUrl}) right/cover`,
}))

const BackgroundOverlay = glamorous.div({
  width: '100%',
  height: '100%',
  background: `linear-gradient(to right, ${blueColour} 64%, rgba(0,0,0,0))`,
})

const Overlay = glamorous.div({
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  background: darkBlueColour,
  opacity: '0.3',
})

const ContentWrap = glamorous.div({
  position: 'absolute',
  top: '0',
  [mediaQueries.phone.portrait]: {
    left: '0',
    right: '0',
  },
  left: '200px',
  maxWidth: '100%',
})

const Nav = glamorous.nav({ backgroundColor: 'rgba(0,0,0,0)', height: '40px', width: 'auto' })

const SideMenu = glamorous.div(
  {
    zIndex: '99',
    gridArea: 'side-menu',
    color: '#FFFFFF',
    position: 'fixed',
    top: '0',
    bottom: '0',
    [mediaQueries.phone.portrait]: {
      display: 'fixed',
      left: '-200px',
    },
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'auto',
  },
  props => ({
    [mediaQueries.phone.portrait]: {
      display: 'fixed',
      left: props.hidden ? '-200px' : '0px',
    },
  }),
)

const PostList = glamorous.ul({ listStyleType: 'none', margin: '0', padding: '0', width: '200px' })

const PostListItem = glamorous.li({ backgroundColor: 'rgba(0,0,0,0.3)' })

const PostLink = glamorous.a({
  fontFamily: "'Open Sans', sans-serif",
  display: 'inline-block',
  color: 'white',
  padding: '5px 15px',
})

const BugerButton = glamorous.button({
  backgroundColor: 'rgba(0,0,0,0)',
  paddingLeft: '.3em',
  color: whiteColour,
  fontSize: '3em',
  position: 'fixed',
  left: '-200px',
  zIndex: 100,
  border: 'none',
  outline: 'none',
  [mediaQueries.phone.portrait]: {
    left: '0px',
  },
})

const Title = glamorous.h1({
  margin: '0px',
  fontFamily,
  [mediaQueries.phone.portrait]: {
    fontSize: '2em',
    paddingTop: '2em',
    paddingLeft: '1em',
  },
  fontSize: '5em',
  color: darkBlueColour,
  textShadow: fontShadow,
  horizontalAlign: 'middle',
})

const SubTitle = glamorous.h2({
  marginTop: '0px',
  marginBottom: '0px',
  marginLeft: 'auto',
  marginRight: 'auto',
  fontFamily,
  [mediaQueries.phone.portrait]: {
    fontSize: '2em',
    paddingLeft: '1em',
  },
  fontSize: '5em',
  color: darkBlueColour,
  textShadow: fontShadow,
  horizontalAlign: 'middle',
})

class NavWrap extends React.Component {
  state = {
    hidden: true,
  }
  handleClick = e => {
    e.preventDefault()
    this.setState({ hidden: !this.state.hidden })
  }
  render () {
    return (
      <Nav>
        <BugerButton onClick={this.handleClick}>=</BugerButton>
        <SideMenu>
          <PostList hidden={this.state.hidden}>
            {this.props.postTitles.map(({ title, slug }) => (
              <PostListItem key={slug}>
                <PostLink>{title}</PostLink>
              </PostListItem>
            ))}
          </PostList>
        </SideMenu>
      </Nav>
    )
  }
}

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
      </BackgroundOverlay>
    </Background>
  </div>
))
