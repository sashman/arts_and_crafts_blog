import React from 'react'
import { getSiteProps, getRouteProps } from 'react-static'
import glamorous from 'glamorous'

const Background = glamorous.div( ({backgroundImageUrl}) => ({
  width: "100%",
  height: "100vh",
  background: "url(" + backgroundImageUrl + ") center/cover"
}))

const Overlay = glamorous.div({
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  background: 'black',
  opacity: '0.3',
})

const Grid = glamorous.div({

  'marginTop': '0px',
  'paddingTop': '50px',
  '@media screen and (orientation : landscape)': {
    '@supports (display: grid)': {
      'gridTemplateRows': 'auto',
      display: 'grid',
      gridGap: 5,
      gridTemplateAreas: `
      "title ."
      ". ."
      "sub-title ."
      `,
    },
  },

  '@supports (display: grid)': {
    'gridTemplateRows': 'auto',
    display: 'grid',
    gridGap: 5,
    gridTemplateAreas: `
    "title"
    "sub-title"
    "."
    `,
  }
})


const ContentWrap = glamorous.div({
'position': 'absolute',
'top': '0',
'left': '200px',
'right': '200px',
'maxWidth': '100%',
'padding': '50px 200px 50px',
})

const SideMenu = glamorous.div({
  'zIndex': '100',
  'gridArea': 'side-menu',
  'color': '#FFFFFF ',
  'position': 'fixed',
  'top': '0',
  'bottom': '0',
  'left': '0',
  'display':'flex',
  'flex-direction':'column',
  'justify-content':'center',
  'overflow':'auto',

  // 'height': "50vh",
})

const PostList = glamorous.ul({
  'listStyleType': 'none',
  'margin': '0',
  'padding': '0',
  'fontSize': '1.5em',
  'width': '200px',
})

const PostListItem = glamorous.li({
  'backgroundColor': 'rgba(0,0,0,0.3)',
})

const PostLink = glamorous.a({
  'fontFamily': "'Open Sans', sans-serif",
  'display': 'inline-block',
  'color': 'white',
  'padding': '5px 15px',
  // 'padding': '1vmax'
})

const Title = glamorous.h1({
  'marginTop': '0px',
  // '@media screen and (orientation : landscape)': {
  //   'marginBottom': '50vh',
  // },
  'fontFamily': "'Pacifico', cursive",
  'fontSize': '5em',
  'color': '#2C2422',
  'textShadow': '4px 1px 4px #FFFFFF',
  'gridArea': 'title',
  'justifySelf': 'right'
})

const SubTitle = glamorous.h2({
  'marginTop': '0px',
  'marginBottom': '0px',
  'fontFamily': "'Pacifico', cursive",
  'fontSize': '5em',
  'color': '#0f1e3e',
  'textShadow': '4px 1px 4px #FFFFFF',
  'gridArea': 'sub-title',
  'justifySelf': 'right'
})




export default getRouteProps(({ title, subTitle, backgroundImageUrl, postTitles }) => (
<div>
  <SideMenu>
    <PostList>
      {postTitles.map(({title, slug}) => (
        <PostListItem>
          <PostLink>{title}</PostLink>
        </PostListItem>
      ))}
    </PostList>
  </SideMenu>

  <Background backgroundImageUrl = {backgroundImageUrl}>
  <Overlay></Overlay>
    <ContentWrap>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </ContentWrap>
  </Background>
</div>
))
