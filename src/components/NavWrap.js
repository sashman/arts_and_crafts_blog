import React from 'react'
import glamorous from 'glamorous'
import mediaQueries from '../mediaQueries'

const whiteColour = 'white'
const sideListWidth = '300px'

const Nav = glamorous.nav({ backgroundColor: 'rgba(0,0,0,0)', height: '40px', width: 'auto' })

const SideMenu = glamorous.div(
  {
    zIndex: '50',
    gridArea: 'side-menu',
    color: '#FFFFFF',
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'auto',
  },
  ({ children: { props } }) => ({
    [mediaQueries.phone.portrait]: {
      display: 'fixed',
      left: props.hidePostList ? `-${sideListWidth}` : '0',
    },
  }),
)

const PostList = glamorous.ul({
  listStyleType: 'none',
  margin: '0',
  padding: '0',
})

const PostListItem = glamorous.li({
  backgroundColor: 'rgba(0,0,0,0.3)',
  paddingTop: '2em',
  paddingBottom: '2em',
  [mediaQueries.phone.portrait]: {
    paddingTop: '.5em',
    paddingBottom: '.5em',
  },
})

const PostLink = glamorous.a({
  fontFamily: "'Open Sans', sans-serif",
  display: 'inline-block',
  color: 'white',
  paddingLeft: '.5em',
  paddingRight: '.5em',
  fontSize: '3em',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
  ':active': {
    textDecoration: 'underline',
  },
  [mediaQueries.phone.portrait]: {
    width: sideListWidth,
    paddingRight: '0',
    fontSize: '2em',
    ':active': {
      textDecoration: 'underline',
      fontSize: '2.05em',
    },
  },
})

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
    left: '0',
  },
})

export default class NavWrap extends React.Component {
  state = {
    hidePostList: true,
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
            {this.props.postTitles.map(({ title, slug }) => (
              <PostListItem key={slug}>
                <PostLink href="#">{title}</PostLink>
              </PostListItem>
            ))}
          </PostList>
        </SideMenu>
      </Nav>
    )
  }
}
