import React from 'react'
import glamorous from 'glamorous'
import mediaQueries from '../mediaQueries'

const whiteColour = 'white'

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

export default class NavWrap extends React.Component {
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
