/* eslint-disable react/no-danger */
import React, { Component } from 'react'
import { renderStaticOptimized } from 'glamor/server'

// import createClient directly
import { createClient } from 'contentful'

import secrets from './secrets'

const client = createClient(secrets.contentful)

export default {
  getRoutes: async () => {
    const homePages = await client.getEntries({
      content_type: 'home'
    })

    const homePageContent = homePages.items[0].fields
    const title = homePageContent.title
    const subTitle = homePageContent.subTitle
    const backgroundImageUrl = homePageContent.backgroundImage.fields.file.url

    const postPages = await client.getEntries({
      content_type: '2wKn6yEnZewu2SCCkus4as'
    })

    console.log(backgroundImageUrl)

    const postTitles = postPages.items.map(postPage => ({
      title: postPage.fields.title,
      slug: postPage.fields.slug
    }))
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getProps: () => ({
          title,
          subTitle,
          backgroundImageUrl,
          postTitles
        }),
        children: postPages.items.map(postPage => ({
          path: `/post/${postPage.fields.slug}`,
          component: 'src/containers/Post',
          getProps: () => ({
            post: postPage.fields
          })
        }))
      },
      {
        path: '/about',
        component: 'src/containers/About'
      },
      {
        is404: true,
        component: 'src/containers/404'
      }
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
          <Body>{children}</Body>
        </Html>
      )
    }
  }
}
