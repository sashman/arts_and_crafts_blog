/* eslint-disable react/no-danger */
import axios from 'axios'
import React, { Component } from 'react'
import { renderStaticOptimized } from 'glamor/server'
import secrets from './secrets'

// import createClient directly
import {createClient} from 'contentful'
const client = createClient(secrets.contentful)

export default {
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getProps: () => ({
          test,
        }),
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  renderToHtml: async (render, Comp, meta) => {
    const html = render(<Comp />)
    const { css } = renderStaticOptimized(() => html)
    meta.glamStyles = css
    return html
  },
  Document: class CustomDocument extends Component {
    render () {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <style dangerouslySetInnerHTML={{ __html: renderMeta.glamStyles }} />
          </Head>
          <Body>
            {children}
          </Body>
        </Html>
      )
    }
  },
}
