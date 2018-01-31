import React from 'react'
import glamorous from 'glamorous'
import { Link } from 'react-static'
import mediaQueries from '../mediaQueries'
import colours from '../colourScheme'

const whiteColour = 'white'
const sideListWidth = '300px'
const { fontShadowBlack } = colours

const Nav = glamorous.nav({ backgroundColor: 'rgba(0,0,0,0)', height: '40px', width: 'auto' })

const SideMenu = glamorous.div(
  {
    zIndex: '50',
    color: '#FFFFFF',
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  ({ children: { props } }) => ({
    [mediaQueries.phone.portrait]: {
      display: 'fixed',
      top: '-500px',
      left: props.hidePostList ? `-${sideListWidth}` : '0'
    }
  })
)

const PostList = glamorous.ul({
  listStyleType: 'none',
  margin: '0',
  padding: '0'
})

const PostListItem = glamorous.li({
  [mediaQueries.phone.portrait]: {
    paddingTop: '.5em',
    paddingBottom: '.5em'
  }
})

const PostLink = glamorous(Link)(({ thumbnail }) => ({
  fontFamily: "'Oswald', sans-serif",
  display: 'inline-block',
  width: '100%',
  color: 'white',
  paddingLeft: '4.3em',
  paddingRight: '.5em',
  paddingTop: '1em',
  paddingBottom: '1em',
  fontSize: '3em',
  textDecoration: 'none',
  ':hover': {
    background: `url(${thumbnail}) right/cover`,
    textShadow: fontShadowBlack,
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: '2px'
  },
  backgroundColor: 'rgba(0,0,0,0.3)',
  '-webkit-transition': 'background 1s, text-shadow 1s',
  transition: 'background 1s, text-shadow 1s',
  'transition-timing-function': 'ease',
  [mediaQueries.phone.portrait]: {
    width: sideListWidth,
    paddingRight: '0',
    fontSize: '2em',
    ':active': {
      textDecoration: 'underline',
      fontSize: '2.05em'
    }
  }
}))

const BugerButton = glamorous.button({
  backgroundColor: 'rgba(0,0,0,0)',
  paddingLeft: '.3em',
  color: whiteColour,
  fontSize: '3em',
  position: 'fixed',
  left: `-${sideListWidth}`,
  zIndex: 100,
  border: 'none',
  outline: 'none',
  [mediaQueries.phone.portrait]: {
    left: '0'
  }
})

export default class NavWrap extends React.Component {
  state = {
    hidePostList: true
  }
  handleClick = e => {
    e.preventDefault()
    this.setState({ hidePostList: !this.state.hidePostList })
  }
  render () {
    return (
      <Nav>
        <BugerButton onClick={this.handleClick}>=</BugerButton>
        <SideMenu>
          <PostList hidePostList={this.state.hidePostList}>
            {this.props.postTitles.map(({ title, slug, thumbnail }) => (
              <PostListItem key={slug}>
                <PostLink to={`/post/${slug}`} thumbnail={thumbnail}>
                  {title}
                </PostLink>
              </PostListItem>
            ))}
          </PostList>
        </SideMenu>
      </Nav>
    )
  }
}
