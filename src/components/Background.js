import glamorous from 'glamorous'

export default glamorous.div(({ backgroundImageUrl }) => ({
  width: '100%',
  height: '100vh',
  background: `url(${backgroundImageUrl}) right/cover`
}))
