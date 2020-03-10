import React from "react"
import { graphql } from "gatsby"

import MDXRenderer from "../components/MDX"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { rhythm, scale } from "../utils/typography"

import "katex/dist/katex.min.css"

class WikiArticleTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx

    return (
      <Layout location={this.props.location} title="Yoon's Wiki">
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              {post.frontmatter.date}
            </p>
          </header>
          <MDXRenderer content={post.body}/>
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
            <Bio />
          </footer>
        </article>

      </Layout>
    )
  }
}

export default WikiArticleTemplate

export const wikiQuery = graphql`
  query WikiArticleBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
