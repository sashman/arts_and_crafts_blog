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
  '@media (min-width: 700px)': {
    '@supports (display: grid)': {
      'gridTemplateRows': 'auto',
      display: 'grid',
      gridGap: 5,
      gridTemplateAreas: `
      ". title ."
      "side-menu side-menu ."
      ". sub-title ."
      `,
    },
  },

  'paddingTop': '50px',
  '@supports (display: grid)': {
    'gridTemplateRows': 'auto',
    display: 'grid',
    gridGap: 5,
    gridTemplateAreas: `
    "title"
    "sub-title"
    "side-menu"
    `,
  },

});

const SideMenu = glamorous.div({
  'gridArea': 'side-menu',
  'fontSize': '3vmax;',
  'color': '#FFFFFF ',
  'height': "50vh",
});


const Title = glamorous.h1({
  'marginTop': '0px',
  'marginBottom': '0px',
  'paddingRight': '15vw',
  'fontFamily': "'Pacifico', cursive",
  'fontSize': '4.7vmax;',
  'color': '#2C2422',
  'textShadow': '4px 1px 4px #FFFFFF',
  'gridArea': 'title',
  'justifySelf': 'right'
})
const SubTitle = glamorous.h2({
  'marginTop': '0px',
  'marginBottom': '0px',
  'paddingRight': '15vw',
  'fontFamily': "'Pacifico', cursive",
  'fontSize': '4.7vmax;',
  'color': '#0f1e3e',
  'textShadow': '4px 1px 4px #FFFFFF',
  'gridArea': 'sub-title',
  'justifySelf': 'right'
})

export default getRouteProps(({ title, subTitle, backgroundImageUrl }) => (
  <Background backgroundImageUrl = {backgroundImageUrl}>
    <Grid>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <SideMenu>
        <ul>
          <li>Menu</li>
          <li>Menu</li>
          <li>Menu</li>
          <li>Menu</li>
          <li>Menu</li>
          <li>Menu</li>
          <li>Menu</li>
        </ul>
      </SideMenu>
    </Grid>
  </Background>
))
