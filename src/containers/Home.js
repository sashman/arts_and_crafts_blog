import React from 'react'
import { getSiteProps, getRouteProps } from 'react-static'
import glamorous from 'glamorous'

const Background = glamorous.div( ({backgroundImageUrl}) => ({
  width: "100%",
  height: "100vh",
  background: "url(" + backgroundImageUrl + ") center/cover"
}))

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

const SideMenu = glamorous.div({
  'gridArea': 'side-menu',
  'fontSize': '3vmax',
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
  'padding': '0'
})

const PostListItem = glamorous.li({
  'backgroundColor': 'black',
})

const PostLink = glamorous.a({
  'fontFamily': "'Open Sans', sans-serif",
  'fontSize': '4vmax',
  'color': 'white',
  // 'padding': '1vmax'
})

const Title = glamorous.h1({
  'marginTop': '0px',
  '@media screen and (orientation : landscape)': {
    'marginBottom': '50vh',
  },
  'fontFamily': "'Pacifico', cursive",
  'fontSize': '4.7vmax',
  'color': '#2C2422',
  'textShadow': '4px 1px 4px #FFFFFF',
  'gridArea': 'title',
  'justifySelf': 'right'
})

const SubTitle = glamorous.h2({
  'marginTop': '0px',
  'marginBottom': '0px',
  'fontFamily': "'Pacifico', cursive",
  'fontSize': '4.7vmax',
  'color': '#0f1e3e',
  'textShadow': '4px 1px 4px #FFFFFF',
  'gridArea': 'sub-title',
  'justifySelf': 'right'
})

export default getRouteProps(({ title, subTitle, backgroundImageUrl, postTitles }) => (
  <Background backgroundImageUrl = {backgroundImageUrl}>

      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <SideMenu>
        <PostList>
          {postTitles.map(({title, slug}) => (
            <PostListItem>
              <PostLink>{title}</PostLink>
            </PostListItem>
          ))}
        </PostList>
      </SideMenu>

  </Background>
))
